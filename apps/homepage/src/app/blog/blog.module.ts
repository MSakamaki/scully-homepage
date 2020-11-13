import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { MarkdownModule } from 'ngx-markdown';
import { HomeComponent } from './components/route/home/home.component';
import { ArticleComponent } from './components/route/article/article.component';

@NgModule({
  declarations: [HomeComponent, ArticleComponent],
  imports: [CommonModule, BlogRoutingModule, MarkdownModule.forRoot()],
  exports: [HomeComponent, ArticleComponent],
})
export class BlogModule {}
