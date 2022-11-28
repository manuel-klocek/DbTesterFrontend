import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManipulateDBComponent } from './manipulate-db/manipulate-db.component';
import { QueryTestComponent } from './query-test/query-test.component';
import { SelectionComponent } from './selection/selection.component';
import { TestcasesViewComponent } from './testcases-view/testcases-view.component';

const routes: Routes = [
  { path: '', component: SelectionComponent },
  { path: 'dbmanipulation', component: ManipulateDBComponent },
  { path: 'case/showAll', component: TestcasesViewComponent },
  { path: 'testquery', component: QueryTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }