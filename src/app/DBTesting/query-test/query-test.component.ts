import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, catchError, of, tap } from 'rxjs';
import { CompileToJsonService } from '../../compile-to-json.service';
import { DifferenceItem } from '../../interfaces/DifferenceList';
import { PersistenceService } from '../../persistence.service';

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
  displayedColumns: string[] = ['field', 'expected', 'got']
  differenceList$!: DifferenceItem[][]
  differenceArray$!: Object[]

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
        this.method(response!)
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

  getItems(index: number): DifferenceItem[] {
    return Object.assign(this.differenceList$[index])
  }

  method(jsonArr: Object[]): void {
    var jsonList: Array<JSON[]> = []
    jsonArr.forEach(item => {
      jsonList.push(item as unknown as JSON[])
    })

    var json: any
    var differList: DifferenceItem[][] = []

    jsonList.forEach(doc => {
      var itemList: DifferenceItem[] = []
      doc.forEach(item => {
        var propertyName = Object.keys(item)[0]
        json = JSON.parse(JSON.stringify(item))
        itemList.push({ field: propertyName, got: json[propertyName].got, expected: json[propertyName].expected })
      })
      differList.push(itemList)
    })

    console.log(differList)

    this.differenceList$ = differList
  }
}
