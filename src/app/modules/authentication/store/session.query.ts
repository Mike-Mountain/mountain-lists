import { Injectable } from '@angular/core';
import { Query, toBoolean } from '@datorama/akita';
import { SessionStore } from './session.store';
import { Session } from './session.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SessionQuery extends Query<Session> {
  public isLoggedIn$: Observable<boolean> = this.select((state) =>
    toBoolean(state.token)
  );

  constructor(protected store: SessionStore) {
    super(store);
  }

  public isLoggedIn(): boolean {
    return toBoolean(this.getValue().token);
  }
}
