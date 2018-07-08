import { AuthService } from './../auth/auth.service';
import { Vote } from './vote';
import { Poll } from './poll';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PollsService {
  private headers;
  pollsUrl = 'https://poll-vote-app.herokuapp.com/api/polls';
  // pollsUrl = 'http://localhost:3000/api/polls';

  constructor(
    private http: HttpClient,
    private authService: AuthService) {
      this.headers = new HttpHeaders({'Authorization': this.authService.getToken()});
      this.headers.append({'Content-Type':  'application/json'});
    }

  getPolls(): Observable<Poll[]> {
    return this.http.get<Poll[]>(this.pollsUrl, {headers: this.headers});
  }

  addPoll(poll: Poll): Observable<Poll> {
    return this.http.post<Poll>(this.pollsUrl, poll, {headers: this.headers});
  }

  deletePoll(id: string): Observable<{}> {
    const url = `${this.pollsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers});
  }

  castVote(id: string, vote: Vote): Observable<Poll> {
    const url = `${this.pollsUrl}/${id}`;
    return this.http.patch<Poll>(url, vote, {headers: this.headers});
  }

  getPoll(id: string): Observable<Poll> {
    const url = `${this.pollsUrl}/${id}`;
    return this.http.get<Poll>(url, {headers: this.headers});
  }

}
