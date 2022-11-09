import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SortComponent } from '../sort/sort.component';
import { User } from '../user';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit , OnChanges {

  @Input() isSortByName : boolean = false;
  @Input() isSortByDOB  : boolean = false;
  users : User[] = [];
  temp: User[] = [];
  constructor( private http : HttpClient) { }
  
  ngOnChanges(changes: SimpleChanges): void {
      for(let prop in changes){
        if(prop === "isSortByName"){
          this.isSortByName = changes[prop]['currentValue'];
        }
        else this.isSortByDOB = changes[prop]['currentValue'];
      }
      this.sortUsers();
  }
  
  ngOnInit(): void {
    this.http.get<User[]>('/assets/data.json').subscribe(users => this.users = users);
  }
  sortUsers(){
    if(this.isSortByName){
      this.users.sort((a,b) => a.name.localeCompare(b.name));
    }
    else if(this.isSortByDOB) {
      this.users.sort(
      (objA, objB) => new Date(objA.dob).getTime() - new Date(objB.dob).getTime(),
    );
      }
  }  
}
