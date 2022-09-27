import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DifferenceArray } from './interfaces/DifferenceList';

@Injectable({
  providedIn: 'root'
})

export class PersistenceService {

  constructor(private http: HttpClient) { }

  _loading = new BehaviorSubject<boolean>(false);

  callTest(json: JSON): Observable<DifferenceArray[]> {
    this._loading.next(true);
    return this.http.post<DifferenceArray[]>('http://localhost:8080/test', json)
  }

  endLoading() {
    this._loading.next(false);
  }
}