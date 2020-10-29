import { HttpClient } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { TransferStateService } from '@scullyio/ng-lib';
import { Apollo, gql } from 'apollo-angular';
import { map, tap } from 'rxjs/operators';

export interface Article {
  title: string;
  body: string;
  publishing: Date;
  writer: Writer;
  tags: Tag[];
}

export interface Writer {
  name: string;
  jobTitle: string;
  articles: Article[];
}

export interface Tag {
  name: string;
  articles: Article[];
}

@Component({
  selector: 'web-page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private apollo: Apollo,
    private transferState: TransferStateService
  ) {}

  articles$ = this.transferState.useScullyTransferState(
    'articles',
    this.apollo
      .watchQuery<{ articles: Article[] }>({
        query: gql`
          query {
            articles {
              title
              body
              publishing
              writer {
                name
              }
              tags {
                name
              }
            }
          }
        `,
      })
      .valueChanges.pipe(
        tap(console.log),
        map((result) => result.data.articles)
      )
  );

  ngOnInit(): void {}
}
