import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, TableDialog } from './app.component';


import { MatFormFieldModule, MatInputModule, MatDialogModule, MatPaginatorModule, MatTableModule,MatIconModule, MatToolbarModule, MatTableDataSource, MatSortModule, MatSort } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TableDialog
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
  ],
  exports: [ TableDialog ],
  providers: [],
  entryComponents: [ TableDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
