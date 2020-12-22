import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { Article } from '../home/home.component';
import { UserEventHookTransferStateService } from '../home/user-event-hook-transfer-state.service';
import { DomControlService } from '../../../../service/dom-control.service';

/** scully.TransferStateService name: detail summary */
const STATE_NAME_DETAIL = 'detail';

@Component({
  selector: 'wot-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  constructor(
    private apollo: Apollo,
    private route: ActivatedRoute,
    private transferState: UserEventHookTransferStateService,
    private domControlService: DomControlService
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

  // TODO: 詳細ページから詳細ページにrouter経由で移動したときに、無限にscriptタグが追加される可能性がある
  async ngOnInit() {
    try {
      await this.domControlService.addScript(
        'https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/prism.min.js'
      );
    } catch (e) {
      console.log(e);
    }

    try {
      await this.domControlService.addStylesheet(
        'https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/themes/prism-twilight.min.css'
      );
    } catch (e) {
      console.log(e);
    }
  }
}
