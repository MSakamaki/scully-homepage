import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiModule } from '@wot/shared/ui';

import { BlogRoutingModule } from './blog-routing.module';
import { MarkdownModule } from 'ngx-markdown';
import { HomeComponent } from './components/route/home/home.component';
import { ArticleComponent } from './components/route/article/article.component';

@NgModule({
  declarations: [HomeComponent, ArticleComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MarkdownModule.forRoot(),
    SharedUiModule,
  ],
  exports: [HomeComponent, ArticleComponent],
})
export class BlogModule {}
