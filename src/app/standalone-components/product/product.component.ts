import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
console.log('this is simple standalone product component 555');
import { NgOptimizedImage } from '@angular/common'
import { ReusableTableComponent } from '../reusable-table/reusable-table.component';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ProductService } from 'src/app/config/product.service';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NgOptimizedImage, ReusableTableComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})



export class ProductComponent implements OnInit {
  listData: any = []
  productData: any = []
  data: any = []
  offset?: number = 1
  limit?: number
  // list:string[]=['name','description','image' ]
  list: any = [
    { 'head': ' Product name ', 'field': 'name' },
    { 'head': 'description', 'field': 'description' },
    { 'head': 'image', 'field': 'image' },
    { 'head': 'action', 'field': '' },
  ]
  constructor(private http: HttpClient, private activrRout: ActivatedRoute, private router: Router, private productSRV: ProductService) {
    console.log('this is simple constroctor');



  }
  ngOnInit(): void {
    this.getAll()
  }
  getAll() {
    this.http.get('https://api.escuelajs.co/api/v1/products').subscribe(suc => {

     
      this.listData = suc
 console.log(this.productData);
    })
    this.productSRV.getfilterdata(this.offset, this.limit).subscribe(suc => {
      this.data = suc
    })
  }

  editUser(item: any) {
    console.log(this.router.navigateByUrl('product/' + item.id));

    this.router.navigateByUrl('product/' + item.id)

  }
  deleteUser(item: any) {

    this.http.delete('https://api.escuelajs.co/api/v1/products/' + item.id).subscribe(suc => {
      this.getAll()
    })
  }
  selectedStartList(num: any) {
    this.offset = num
    console.log(this.offset);
    this.getAll()

  }
  selectedlist(num: any) {
    console.log(num);
    this.limit = num
    this.getAll()
  }

}
