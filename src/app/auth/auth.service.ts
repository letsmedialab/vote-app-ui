import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUrl = 'http://localhost:8000/api/auth';
  token: string;

  constructor(private http: HttpClient) { }

  logout() {
    this.token = null;
  }

  isAuthenticated() {
     return this.token != null;
    // return true;
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
