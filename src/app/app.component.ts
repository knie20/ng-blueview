import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-blueview';
  displayedColumns: string[] =  ['time', 'state', 'city', 'zone'];
  dataSource = ELEMENT_DATA;
  
}
export interface PeriodicElement {
  time: number;
  state: string;
  city: string;
  zone: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {time: 1, state: 'Ohio', city: 'Columbus', zone: '43201'},
  {time: 2, state: 'Ohio', city: 'Avon', zone: '44011'},
  {time: 3, state: 'Ohio', city: 'Cincinatti', zone: '45219'},
  
];
