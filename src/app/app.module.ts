import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { AutosizeModule } from '@techiediaries/ngx-textarea-autosize';
import { AggregationsComponent } from './aggregation/aggregations/aggregations.component';
import { ChangeCardComponent } from './aggregation/change-card/change-card.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DbEditComponent } from './dbmanipulation/db-edit/db-edit.component';
import { EditCardComponent } from './dbmanipulation/edit-card/edit-card.component';
import { QueryTestComponent } from './DBTesting/query-test/query-test.component';
import { TestcasesViewComponent } from './DBTesting/testcases-view/testcases-view.component';
import { SelectionComponent } from './selection/selection.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectionComponent,
    QueryTestComponent,
    TestcasesViewComponent,
    AggregationsComponent,
    ChangeCardComponent,
    DbEditComponent,
    EditCardComponent
  ],
  imports: [
    MatCardModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatTableModule,
    MatProgressBarModule,
    HttpClientModule,
    MatButtonModule,
    BrowserModule,
    AutosizeModule,
    MatGridListModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
