import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUrl = 'https://poll-vote-app.herokuapp.com/api/auth';
  // authUrl = 'http://localhost:3000/api/auth';
  token: string;

  constructor(
    private _cookieService: CookieService,
    private http: HttpClient) { }

  logout() {
    this.token = null;
    this._cookieService.removeAll();
  }

  isAuthenticated() {
      return this._cookieService.get('token') != null;
  }

  setToken(token: string) {
    this.token = token;
    this._cookieService.put('token', token);
  }

  getToken() {
    return this._cookieService.get('token');
  }

  signupUser(name: string, email: string, password: string): Observable<any> {
    const url = `${this.authUrl}/register`;
    const creds = `name=${name}&email=${email}&password=${password}`;
    return this.http.post(url, creds, httpOptions);
  }

  signinUser(email: string, password: string): Observable<any> {
    const url = `${this.authUrl}/login`;
    const creds = `email=${email}&password=${password}`;
    return this.http.post(url, creds, httpOptions);
  }
}
