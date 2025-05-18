import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import { Auth, signInWithEmailAndPassword, signOut, authState,User, UserCredential } from '@angular/fire/auth';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: Observable<User | null>;

  constructor(
      private auth: Auth,
      public router: Router
  ) {
    this.currentUser = authState(this.auth);
  }

  signIn(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  signOut(): Promise<void> {
    localStorage.setItem('isLoggedIn', 'false');
    return signOut(this.auth).then(() => {
      this.router.navigateByUrl('/home');
    });
  }
    isLoggedIn(): Observable<User | null> {
        return this.currentUser;
    }

    updateLoginStatus(isLoggedIn: boolean): void {
        localStorage.setItem('isLoggedIn', isLoggedIn ? 'true' : 'false');
    }

    getCurrentUserEmail(): Observable<string | null> {
        return this.currentUser.pipe(
            map(user => user ? user.email : null)
        );
    }
}
