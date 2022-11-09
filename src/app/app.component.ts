import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  isSortByName = false;
  isSortByDOB = false;

  onChangeSortByName(val : boolean){
    this.isSortByName = val;
  }

  onChangeSortByDOB(val : boolean){
    this.isSortByDOB = val;
  }
}
