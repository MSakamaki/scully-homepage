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
  constructor() {}
}
