import { Component, OnInit } from '@angular/core';
import { TransferStateService } from '@scullyio/ng-lib';
import { Apollo, gql } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

/** scully.TransferStateService name: article summary */
const STATE_NAME_ARTICLE = 'articles';
/** scully.TransferStateService name: all tags */
const STATE_NAME_TAGS = 'tags';

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
  private valueChangesSubscription$: Subscription = void 0;

  constructor(
    private apollo: Apollo,
    private transferState: TransferStateService
  ) {}

  private readonly articleQueryRef$ = this.apollo.watchQuery<{
    articles: Article[];
    tags: Tag[];
  }>({
    query: gql`
      query ArticlesProviding($where: ArticleWhereInput) {
        articles(orderBy: createdAt_DESC, where: $where) {
          title
          publishing
          writer {
            name
          }
          tags {
            name
          }
        }
        tags {
          name
        }
      }
    `,
    variables: {
      where: { AND: [] },
    },
  });

  articles$ = this.transferState.useScullyTransferState(
    STATE_NAME_ARTICLE,
    this.articleQueryRef$.valueChanges.pipe(
      map((result) => result.data.articles)
    )
  );

  tags$ = this.transferState.useScullyTransferState(
    STATE_NAME_TAGS,
    this.articleQueryRef$.valueChanges.pipe(
      map((result) => result.data.tags.map((tag) => tag.name))
    )
  );

  ngOnInit(): void {}

  onTagSet(tag: string) {
    this.initObservable();
    this.articleQueryRef$.setVariables({
      where: { AND: [{ tags_some: { name: tag } }] },
    });
  }

  private initObservable() {
    if (!this.valueChangesSubscription$) {
      this.valueChangesSubscription$ = this.articleQueryRef$.valueChanges.subscribe(
        (data) => {
          this.transferState.setState(STATE_NAME_ARTICLE, data.data.articles);
        }
      );
    }
  }
}