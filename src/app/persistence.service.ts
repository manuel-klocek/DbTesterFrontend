import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Changes } from './interfaces/AggregationTypes';

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

  callAggregation(id: number): Observable<Changes[]> {
    if (id == null || id < 0) return of([])
    this._loading.next(true);
    return this.http.get<Changes[]>(`http://localhost:8080/aggregation/id=${id}`)
  }

  callDB(id: number): Observable<Object[]> {
    if (id == null || id < 0) return of([])
    this._loading.next(true)
    return this.http.get<Object[]>(`http://localhost:8080/get/id=${id}`)
  }

  endLoading() {
    this._loading.next(false);
  }
}