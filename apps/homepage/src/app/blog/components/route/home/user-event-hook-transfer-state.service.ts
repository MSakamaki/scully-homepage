import { Injectable } from '@angular/core';
import { isScullyGenerated, TransferStateService } from '@scullyio/ng-lib';
import {
  fromEvent,
  Subject,
  Observable,
  merge,
  asyncScheduler,
  scheduled,
} from 'rxjs';
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
      scheduled(
        [
          'mousemove',
          'mousedown',
          'scroll',
          'wheel',
          'keydown',
          'touchstart',
          'touchmove',
        ].map((event) => fromEvent(document, event)),
        asyncScheduler
      )
        .pipe(mergeAll(), take(1))
        .subscribe(() => {
          originalState.subscribe((state) => {
            bs.next(state);
          });
        });
      return scheduled(
        [this.transferState.getState<T>(name), bs.asObservable()],
        asyncScheduler
      ).pipe(mergeAll());
    }
    return originalState.pipe(
      tap((state) => this.transferState.setState(name, state))
    );
  }
}
