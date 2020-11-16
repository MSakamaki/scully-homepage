import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { Article } from '../home/home.component';
import { UserEventHookTransferStateService } from '../home/user-event-hook-transfer-state.service';
import { CdnService, ScriptName } from '../../../../service/cdn.service';

/** scully.TransferStateService name: detail summary */
const STATE_NAME_DETAIL = 'detail';

@Component({
  selector: 'web-page-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  constructor(
    private apollo: Apollo,
    private route: ActivatedRoute,
    private transferState: UserEventHookTransferStateService,
    private cdnService: CdnService
  ) {}

  private readonly articleQueryRef$ = this.apollo.query<{
    article: Article;
  }>({
    query: gql`
      query ArticleDetail($id: ID) {
        article(where: { id: $id }) {
          body
          title
          writer {
            name
            jobTitle
          }
          publishing
        }
      }
    `,
    variables: {
      id: this.route.snapshot.paramMap.get('id'),
    },
  });

  article$ = this.transferState.useScullyTransferState(
    STATE_NAME_DETAIL,
    this.articleQueryRef$.pipe(map((result) => result.data.article))
  );

  ngOnInit(): void {
    this.cdnService.load([ScriptName.prism_twilight, ScriptName.prism_js]);
  }
}
