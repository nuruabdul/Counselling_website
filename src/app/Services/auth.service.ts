import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse } from '../Modal/Auth.Response';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly API_KEY = 'AIzaSyCL58F6ANe_UHaCAIRI1ySGsmhA966cprM';
  private readonly SIGNUP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.API_KEY}`;
  private readonly LOGIN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.API_KEY}`;

  constructor(private http: HttpClient) {}
  
  // User authentication state
  userLoggedIn = new BehaviorSubject<boolean>(false);
  signup(email: string, password: string) {
    const data = { email: email, password: password, returnSecureToken: true };
    return this.http.post<AuthResponse>(this.SIGNUP_URL, data).pipe(
      catchError(error => {
        console.error('Signup failed', error);
        return throwError(error);
      })
    );
  }

  login(email: string, password: string) {
    const data = { email: email, password: password, returnSecureToken: true };
    return this.http.post<AuthResponse>(this.LOGIN_URL, data).pipe(
      catchError(error => {
        console.error('Login failed', error);
        return throwError(error);
      }),
      tap(response => {
        // Update user authentication state upon successful login
        this.userLoggedIn.next(true);
      })
    );
  }

  logout() {
    // Clear user authentication state upon logout
    this.userLoggedIn.next(false);
    // Additional logic to clear user session or perform any necessary cleanup
  }
}

