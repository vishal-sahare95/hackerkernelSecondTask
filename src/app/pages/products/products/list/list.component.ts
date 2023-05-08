import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/config/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public productARR: any
  public page: number = 1
  public name: any
  public barcode: any
  public nature: any
  public category: any
  public packing_type: any
  public limit?: number=10
  public inventory_status: any
  public get_all_deleted: any
  public internal_tag: any

  // filterObj = {
  //   page: 1,
  //   name: '',
  //   barcode: '',
  //   nature: '',
  //   category: '',
  //   packing_type: '',
  //   limit: 10,
  //   inventory_status: '',
  //   get_all_deleted: '',
  //   internal_tag: '',

  // }
  constructor(private productSRV: ProductService) { }

  ngOnInit(): void {
    this.filterProductData()
  }

  filterProductData(){
    this.productSRV.getfilterdata(this.page, this.name, this.barcode, this.nature, this.category, this.packing_type, this.limit, this.inventory_status, this.get_all_deleted, this.internal_tag).subscribe(suc => {
      console.log(this.page);
      
      
      this.productARR=suc.data.data
      console.log(this.productARR);
       
      console.log(this.productARR.length)
      console.log(suc.data.data.length)
      })
  }

  increment(){
    this.page =this.page +1
    this.filterProductData()
  }
  decrement(){
    this.page =this.page -1
    this.filterProductData()

  }
  pageValue(no:number){
this.page=no
console.log(this.page);

this.filterProductData()
  }
  seachName(name:string){
    this.name=name
    this.filterProductData()
  }
}
