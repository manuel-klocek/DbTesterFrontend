import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PersistenceService {

  constructor(private http: HttpClient) { }

  _loading = new BehaviorSubject<boolean>(false);

  callTest(json: JSON): Observable<Object[]> {
    this._loading.next(true);
    return this.http.post<Object[]>('http://localhost:8080/test', json)
  }

  endLoading() {
    this._loading.next(false);
  }
}