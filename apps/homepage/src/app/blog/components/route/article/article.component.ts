import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { Article } from '../home/home.component';

@Component({
  selector: 'web-page-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  constructor(private apollo: Apollo, private route: ActivatedRoute) {}

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

  article$ = this.articleQueryRef$.pipe(map((result) => result.data.article));

  ngOnInit(): void {}
}
