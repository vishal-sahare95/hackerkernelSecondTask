import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
console.log('this is simple standalone product component 555'); 
import { NgOptimizedImage } from '@angular/common'
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,HttpClientModule,NgOptimizedImage],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})



export class ProductComponent {
  productData:any=[]
  constructor(private http:HttpClient){
    console.log('this is simple constroctor');
    this.http .get('https://api.escuelajs.co/api/v1/products').subscribe(suc=>{
    console.log(suc);
    this.productData=suc
    
  })
 
  }
}
