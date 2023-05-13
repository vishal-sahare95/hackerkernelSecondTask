import { Component } from '@angular/core';
console.log('product');

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(){
    console.log('this is model component');
    
  }
}
