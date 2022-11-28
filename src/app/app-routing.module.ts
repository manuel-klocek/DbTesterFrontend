import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AggregationsComponent } from './aggregation/aggregations/aggregations.component';
import { DbEditComponent } from './dbmanipulation/db-edit/db-edit.component';
import { QueryTestComponent } from './DBTesting/query-test/query-test.component';
import { SelectionComponent } from './selection/selection.component';

const routes: Routes = [
  { path: '', component: SelectionComponent },
  { path: 'aggregations', component: AggregationsComponent },
  { path: 'dbmanipulation', component: DbEditComponent },
  { path: 'testquery', component: QueryTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }