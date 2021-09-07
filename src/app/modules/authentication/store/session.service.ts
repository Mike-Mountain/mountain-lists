import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionStore } from './session.store';
import {
  Credentials,
  RegistrationCredentials,
  Session,
  User,
} from './session.model';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SessionService {
  constructor(private sessionStore: SessionStore, private http: HttpClient) {}

  public login(credentials: Credentials): Observable<Session> {
    const url = `${environment.apiUrl}/auth/local`;
    return this.http
      .post<Session>(url, credentials)
      .pipe(
        tap((session) =>
          this.sessionStore.update({ token: session.token, user: session.user })
        )
      );
  }

  public register(credentials: RegistrationCredentials): Observable<Session> {
    const url = `${environment.apiUrl}/auth/register`;
    return this.http
      .post<Session>(url, credentials)
      .pipe(
        tap((session) =>
          this.sessionStore.update({ token: session.token, user: session.user })
        )
      );
  }

  public logout(): void {
    this.sessionStore.reset();
  }
}
