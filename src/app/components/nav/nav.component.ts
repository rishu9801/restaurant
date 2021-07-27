import { Component, Output,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Output() categoryFilter = new EventEmitter<string>();
  
  btn = [
    {id:1,name:'breakfast'},
    {id:2,name:'lunch'},
    {id:3,name:'dinner'},
    {id:4,name:'all'
  }];
  
  constructor() { }

  ngOnInit(): void {
  }

  addCategory(value:string){
    this.categoryFilter.emit(value)
  }


  check(){
    console.log('clicked from nav');
  }
}
  
  


    

