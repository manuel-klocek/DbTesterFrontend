import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, catchError, of, tap } from 'rxjs';
import { CompileToJsonService } from '../compile-to-json.service';
import { DifferenceArray, DifferenceItem } from '../interfaces/DifferenceList';
import { PersistenceService } from '../persistence.service';

@Component({
  selector: 'app-query-test',
  templateUrl: './query-test.component.html',
  styleUrls: ['./query-test.component.scss']
})
export class QueryTestComponent implements OnInit {

  constructor(private compileJson: CompileToJsonService,
    private request: PersistenceService,
    private snackBar: MatSnackBar) { }

  showResult$ = new BehaviorSubject<boolean>(false);
  existsError$ = new BehaviorSubject<boolean>(false);
  error: Error | null = null
  loadingIndicator$ = this.request._loading
  displayedColumns: string[] = ['expected', 'got']
  differenceList$!: DifferenceItem[]
  differenceArray$!: DifferenceArray[]

  ngOnInit(): void { }

  runTests(queryString: string, wantString: string): void {
    this.loadingIndicator$.next(true)
    var json: JSON = {} as JSON
    try { json = this.compileJson.createTestJson(JSON.parse(queryString), JSON.parse(wantString)) } catch (ex) { console.log(ex) }
    this.request.callTest(json).pipe(
      tap({
        error: (error) => this.error = error
      }),
      catchError(_ => of([]))
    )
      .subscribe(async response => {
        this.differenceArray$ = response
        this.sortOutput(response!)
        this.loadingIndicator$.next(false)
        this.handleError(this.error)
      })
  }

  handleError(err: Error | null): void {
    if (err === null) {
      this.showResult$.next(true)
      this.existsError$.next(false)
    } else {
      this.showResult$.next(false)
      this.existsError$.next(true)
      this.snackBar.open(
        'An error with name "' + err.name + '" occurred',
        'Got it!',
        {
          duration: 7000
        }
      )
    }
  }

  sortOutput(response: DifferenceArray[]): void {
    var docList: DifferenceItem[] = []
    for (let i = 0; i < response.length; i++) {
      docList.push(Object.assign(response[i]))
    }
    this.differenceList$ = docList
    console.log(docList)
  }

  getItems(index: number): DifferenceItem[] {
    return Object.assign(this.differenceList$[index])
  }
}