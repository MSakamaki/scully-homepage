import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { RouterModule } from '@angular/router';
import { GraphQLModule } from './graphql.module';
import { BlogModule } from './blog/blog.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () =>
          import('./blog/blog.module').then((m) => m.BlogModule),
      },
    ]),
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    ScullyLibModule,
    GraphQLModule,
    BlogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
