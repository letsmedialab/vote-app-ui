import { Vote } from './vote';
import { Poll } from './poll';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PollsService {
  pollsUrl = 'http://localhost:8000/api/polls';

  constructor(private http: HttpClient) { }

  getPolls(): Observable<Poll[]> {
    return this.http.get<Poll[]>(this.pollsUrl);
  }

  addPoll(poll: Poll): Observable<Poll> {
    return this.http.post<Poll>(this.pollsUrl, poll, httpOptions);
  }

  deletePoll(id: string): Observable<{}> {
    const url = `${this.pollsUrl}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  castVote(id: string, vote: Vote): Observable<Poll> {
    const url = `${this.pollsUrl}/${id}`;
    return this.http.patch<Poll>(url, vote, httpOptions);
  }

}
