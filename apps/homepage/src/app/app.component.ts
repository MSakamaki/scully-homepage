import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@web-page/api-interfaces';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { TransferStateService } from '@scullyio/ng-lib';

@Component({
  selector: 'web-page-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.transferState.useScullyTransferState(
    'hello',
    this.http.get<Message>('/api/hello')
  );

  articles$ = this.transferState.useScullyTransferState(
    'articles',
    this.apollo
      .watchQuery<{ articles: { title: string }[] }>({
        query: gql`
          query {
            articles {
              title
            }
          }
        `,
      })
      .valueChanges.pipe(map((result) => result.data.articles))
  );

  constructor(
    private apollo: Apollo,
    private http: HttpClient,
    private transferState: TransferStateService
  ) {}
}
