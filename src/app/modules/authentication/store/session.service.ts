import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionStore } from './session.store';
import { Credentials, Session } from './session.model';
import { environment } from '../../../../environments/environment';
import { from, Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat';
import UserCredential = firebase.auth.UserCredential;
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';

@Injectable({ providedIn: 'root' })
export class SessionService {
  constructor(
    private sessionStore: SessionStore,
    private http: HttpClient,
    private auth: AngularFireAuth,
    private database: AngularFirestore
  ) {}

  public login(credentials: Credentials): Observable<UserCredential> {
    return from(
      this.auth.signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      )
    ).pipe(
      tap((user: UserCredential) => {
        const appUser = this.fetchConnectedUser(user.user?.uid);
        console.log(appUser);
      }),
      catchError((err) => {
        console.log(err);
        return of({} as UserCredential);
      })
    );
  }

  // public register(credentials: Credentials): Observable<Session> {
  // const url = `${environment.apiUrl}/auth/register`;
  // return this.http
  //   .post<Session>(url, credentials)
  //   .pipe(
  //     tap((session) =>
  //       this.sessionStore.update({ token: session.token, user: session.user })
  //     )
  //   );
  // }

  public logout(): void {
    this.sessionStore.reset();
  }

  private fetchConnectedUser(
    uuid: string | undefined
  ): AngularFirestoreDocument | null {
    if (!uuid) {
      return null;
    }
    return this.database.collection('users').doc(uuid);
  }
}
