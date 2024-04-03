import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {
  URL = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) { }
  getPosts(_start = 0, _limit = 20) {
    return this.http.get(this.URL + `posts`, {
      params: new HttpParams().set('_start',_start).set('_limit',_limit),
    });
  }
}
