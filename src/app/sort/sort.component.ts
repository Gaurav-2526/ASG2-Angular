import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {

   @Output() sortByNameEvent = new EventEmitter<boolean>();
   @Output() sortByDOBEvent = new EventEmitter<boolean>();
   

  constructor() { }
   sortByName = false;
   sortByDOB = false;
  ngOnInit(): void {
  }

  onChangeNameSort(){
    this.sortByName = !this.sortByName;
    this.sortByNameEvent.emit(this.sortByName);
  }

  onChangeDOBSort(){
    this.sortByDOB = !this.sortByDOB;
    this.sortByDOBEvent.emit(this.sortByDOB);
  }  
}
