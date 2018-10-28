import { MatSort, MatTableDataSource } from '@angular/material';
import { Component, ViewChild, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'ng-blueview';
  displayedColumns: string[] =  ['time', 'state', 'city', 'zone'];
  dataSource = new MatTableDataSource(RADIO_DATA);
  reportData;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(http:Http) {
    this.reportData = http.get('api/people.json')
      .pipe(map(response => response.json()));
  }
  
}
export interface Transcript {
  time: string;
  state: string;
  city: string;
  zone: string;
}

const RADIO_DATA: Transcript[] = [
  {time: '1', state: 'Ohio', city: 'Columbus', zone: '43201'},
  {time: '2', state: 'Ohio', city: 'Avon', zone: '44011'},
  {time: '3', state: 'Ohio', city: 'Cincinatti', zone: '45219'},
];
