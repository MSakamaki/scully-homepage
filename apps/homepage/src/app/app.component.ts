import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@wot/api-interfaces';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { TransferStateService } from '@scullyio/ng-lib';

@Component({
  selector: 'wot-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {}
}
