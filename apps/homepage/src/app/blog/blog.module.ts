import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiModule } from '@wot/shared/ui';

import { BlogRoutingModule } from './blog-routing.module';
import { MarkdownModule } from 'ngx-markdown';
import { HomeComponent } from './components/route/home/home.component';
import { ArticleComponent } from './components/route/article/article.component';
import { MarkedOptions, MarkedRenderer } from 'ngx-markdown';

// function that returns `MarkedOptions` with renderer override
export const markedOptionsFactory = (): MarkedOptions => {
  const renderer = new MarkedRenderer();

  renderer.image = (href: string, title: string, text: string) => {
    return `<img class="image" src="${href}" alt="${text}" title="${title}" width=100%></img>`;
  };

  return {
    renderer: renderer,
  };
};

@NgModule({
  declarations: [HomeComponent, ArticleComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MarkdownModule.forRoot({
      markedOptions: {
        provide: MarkedOptions,
        useFactory: markedOptionsFactory,
      },
    }),
    SharedUiModule,
  ],
  exports: [HomeComponent, ArticleComponent],
})
export class BlogModule {}
