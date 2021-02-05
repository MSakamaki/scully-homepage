import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { RouterModule } from '@angular/router';
import { GraphQLModule } from './graphql.module';
import { BlogModule } from './blog/blog.module';
import { environment } from '../environments/environment';

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
    environment.e2e ? NoopAnimationsModule : BrowserAnimationsModule,
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
