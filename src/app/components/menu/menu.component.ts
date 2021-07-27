import { Component, Input, OnInit } from '@angular/core';
import { DataService, MenuItem } from 'src/app/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu:Array<MenuItem> = [];
  menu_item:Array<MenuItem> = [];
  
  constructor(private dataService: DataService ) { }
  
  ngOnInit(): void {
    this.menu = this.dataService.getData();
    this.filterMenu('all')
  }

  filterMenu(category:string):void {
    if(category != 'all') {
      this.menu_item = this.menu.filter(x => category == x.category);
    }else{
      this.menu_item = this.menu.filter(x => category !== null);
    }
  };
}
    
  

   

  


