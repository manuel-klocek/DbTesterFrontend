import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { AutosizeModule } from '@techiediaries/ngx-textarea-autosize';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManipulateDBComponent } from './manipulate-db/manipulate-db.component';
import { QueryTestComponent } from './query-test/query-test.component';
import { SelectionComponent } from './selection/selection.component';
import { TestcasesViewComponent } from './testcases-view/testcases-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectionComponent,
    QueryTestComponent,
    ManipulateDBComponent,
    TestcasesViewComponent
  ],
  imports: [
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
