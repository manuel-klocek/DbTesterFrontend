import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, catchError, of } from 'rxjs';
import { CompileToJsonService } from '../compile-to-json.service';
import { DifferenceArray, DifferenceItem } from '../interfaces/DifferenceList';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-query-test',
  templateUrl: './query-test.component.html',
  styleUrls: ['./query-test.component.scss']
})
export class QueryTestComponent implements OnInit {

  constructor(private compileJson: CompileToJsonService,
    private request: RequestService) { }

  showResult$ = new BehaviorSubject<boolean>(false);
  loadingIndicator$ = this.request._loading
  displayedColumns: string[] = ['expected', 'got']
  differenceList$!: DifferenceItem[]
  differenceArray$!: DifferenceArray[]

  ngOnInit(): void { }

  runTests(queryString: string, wantString: string): void {
    this.showResult$.next(true)
    this.loadingIndicator$.next(true)
    const json = this.compileJson.createTestJson(JSON.parse(queryString), JSON.parse(wantString))
    this.request.callTest(json).pipe(
      catchError(_ => of([]))
    ).subscribe(async response => { this.differenceArray$ = response; this.sortOutput(response!); this.loadingIndicator$.next(false) })
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