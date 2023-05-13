import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
console.log('simple');

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent  {
constructor(private http:HttpClient){
  console.log('this is simple constroctor');
  this.http .get('https://api.escuelajs.co/api/v1/products').subscribe(suc=>{
  console.log(suc);
  
})
}
ngOnInit(): void {
//   console.log('this is simple constroctor');
// this.http .get('https://api.escuelajs.co/api/v1/products').subscribe(suc=>{
//   console.log(suc);
  
// })
}
}
