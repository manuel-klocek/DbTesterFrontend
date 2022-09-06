import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatGridListModule } from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectionComponent } from './selection/selection.component';
import { QueryTestComponent } from './query-test/query-test.component';
import { ManipulateDBComponent } from './manipulate-db/manipulate-db.component';
import { ManipulateQuerydbComponent } from './manipulate-querydb/manipulate-querydb.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectionComponent,
    QueryTestComponent,
    ManipulateDBComponent,
    ManipulateQuerydbComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
