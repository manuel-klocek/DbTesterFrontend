import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, catchError, of, tap } from 'rxjs';
import { PersistenceService } from '../../persistence.service';

@Component({
  selector: 'app-db-edit',
  templateUrl: './db-edit.component.html',
  styleUrls: ['./db-edit.component.scss']
})
export class DbEditComponent implements OnInit {

  constructor(private persistence: PersistenceService) { }


  error?: Error
  response$: Object = {}
  loadingIndicator$: BehaviorSubject<boolean> = this.persistence._loading


  ngOnInit(): void {
  }


  getObject(id: number): void {
    this.persistence.callDB(id).pipe(
      tap({
        error: (error) => this.error = error
      }),
      catchError(_ => of([]))
    )
      .subscribe(async response => {
        this.response$ = response[0]
        this.loadingIndicator$.next(false)
      });
  }
}
