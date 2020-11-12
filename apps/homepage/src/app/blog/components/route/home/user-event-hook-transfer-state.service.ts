import { Injectable } from '@angular/core';
import { isScullyGenerated, TransferStateService } from '@scullyio/ng-lib';
import { fromEvent, Subject, Observable, of } from 'rxjs';
import { mergeAll, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserEventHookTransferStateService {
  constructor(private transferState: TransferStateService) {}

  public useScullyTransferState<T>(
    name: string,
    originalState: Observable<T>
  ): Observable<T> {
    if (isScullyGenerated()) {
      const bs = new Subject<T>();
      of(
        ...[
          'mousemove',
          'mousedown',
          'scroll',
          'wheel',
          'keydown',
          'touchstart',
          'touchmove',
        ].map((event) => fromEvent(document, event))
      )
        .pipe(mergeAll(), take(1))
        .subscribe(() => {
          originalState.subscribe((state) => {
            bs.next(state);
          });
        });
      return of(this.transferState.getState<T>(name), bs.asObservable()).pipe(
        mergeAll()
      );
    }
    return originalState.pipe(
      tap((state) => this.transferState.setState(name, state))
    );
  }
}
