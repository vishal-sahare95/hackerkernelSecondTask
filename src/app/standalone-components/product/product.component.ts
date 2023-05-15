import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
console.log('this is simple standalone product component 555'); 
import { NgOptimizedImage } from '@angular/common'
import { ReusableTableComponent } from '../reusable-table/reusable-table.component';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,HttpClientModule,NgOptimizedImage,ReusableTableComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})



export class ProductComponent {
  productData:any=[]

  // list:string[]=['name','description','image' ]
  list:any=[
    {'head':' Product name ', 'field':'name'},
    {'head':'description', 'field':'description'},
    {'head':'image', 'field':'image'},
    {'head':'action', 'field':''},
  ]
  constructor(private http:HttpClient, private activrRout:ActivatedRoute, private router :Router){
    console.log('this is simple constroctor');

    this.getAll()
 
  }
  getAll(){
    this.http .get('https://api.escuelajs.co/api/v1/products').subscribe(suc=>{
    console.log(suc);
    this.productData=suc
    
  })
  }
 
  editUser(item:any){
    console.log(this.router.navigateByUrl('product/'+item.id));
    
    this.router.navigateByUrl('product/'+item.id)
  
  }
  deleteUser(item:any){  
    console.log(item);
    
    this.http.delete('https://api.escuelajs.co/api/v1/products/'+item).subscribe(suc=>{
       this.getAll()
    })

   
  }
}
