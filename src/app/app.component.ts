import { MatSort, MatTableDataSource } from '@angular/material';
import { Component, ViewChild, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'ng-blueview';
  displayedColumns: string[] =  ['time', 'state', 'city', 'zone'];
  dataSource = new MatTableDataSource(RADIO_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }s
  
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
  {time: '3', state: 'Ohio', city: 'Cincinatti', zone: '45219'},
  {time: '3', state: 'Ohio', city: 'Cincinatti', zone: '45219'},
  {time: '3', state: 'Ohio', city: 'Cincinatti', zone: '45219'},
  {time: '3', state: 'Ohio', city: 'Cincinatti', zone: '45219'},
  {time: '3', state: 'Ohio', city: 'Cincinatti', zone: '45219'},
  {time: '3', state: 'Ohio', city: 'Cincinatti', zone: '45219'},
  {time: '3', state: 'Ohio', city: 'Cincinatti', zone: '45219'},
  {time: '3', state: 'Ohio', city: 'Cincinatti', zone: '45219'},
  {time: '3', state: 'Ohio', city: 'Cincinatti', zone: '45219'},
  {time: '3', state: 'Ohio', city: 'Cincinatti', zone: '45219'},
  {time: '3', state: 'Ohio', city: 'Cincinatti', zone: '45219'},
  {time: '3', state: 'Ohio', city: 'Cincinatti', zone: '45219'},
  {time: '3', state: 'Ohio', city: 'Cincinatti', zone: '45219'},
  {time: '3', state: 'Ohio', city: 'Cincinatti', zone: '45219'},
  {time: '3', state: 'Ohio', city: 'Cincinatti', zone: '45219'},
  {time: '3', state: 'Ohio', city: 'Cincinatti', zone: '45219'},
  {time: '3', state: 'Ohio', city: 'Cincinatti', zone: '45219'},
];
