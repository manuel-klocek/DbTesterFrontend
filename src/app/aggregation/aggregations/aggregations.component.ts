import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, catchError, of, tap } from 'rxjs';
import { ChangeCards, Changes } from '../../interfaces/AggregationTypes';
import { PersistenceService } from '../../persistence.service';

@Component({
  selector: 'app-aggregations',
  templateUrl: './aggregations.component.html',
  styleUrls: ['./aggregations.component.scss']
})
export class AggregationsComponent implements OnInit {

  constructor(private persistence: PersistenceService) { }

  ngOnInit(): void {
  }

  error?: Error
  response$: Changes[] = [{} as Changes]
  loadingIndicator$: BehaviorSubject<boolean> = this.persistence._loading
  ChangeCards: ChangeCards[] = []

  getAggregation(id: number): void {
    this.persistence.callAggregation(id).pipe(
      tap({
        error: (error) => this.error = error
      }),
      catchError(_ => of([]))
    )
      .subscribe(async response => {
        this.response$ = Object.assign(response)
        this.loadingIndicator$.next(false)
        this.rearrange(response)
      });
  }

  rearrange(response: Changes[]): void {
    this.ChangeCards = []
    var changes: Changes[] = []
    for (var i = 0; i < response.length; i++) {
      changes = response[i].new as Changes[]

      var keys: string[] = []
      var values: any[] = []
      var changedKeys: string[] = response[i].changedKeys
      var timestamp: number = response[i].timestamp
      changes.forEach(change => {
        keys.push(Object.keys(change).toString())
        values.push(Object.values(change)[0])
      })

      const ChangeCard: ChangeCards = {
        keys,
        values,
        changedKeys,
        timestamp
      }

      this.ChangeCards.push(ChangeCard)
    }
  }
}