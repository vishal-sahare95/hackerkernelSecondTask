import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/config/login/login.service';
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
  public limit?: number = 10
  public inventory_status: any
  public get_all_deleted: any
  public internal_tag: any
  public lastPage?: any
  public to?: any
  public last?: any
  public isLoader: boolean = true

  constructor(private productSRV: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.filterProductData()
  }

  filterProductData() {
    this.isLoader = false
    this.productSRV.getfilterdata(this.page, this.name, this.barcode, this.nature, this.category, this.packing_type, this.limit, this.inventory_status, this.get_all_deleted, this.internal_tag).subscribe(suc => {


      this.productARR = suc.data.data
      console.log(this.productARR);

      console.log(this.productARR.length)
      console.log(suc.data.data.length)
      this.lastPage = suc.data.last_page
      this.last = suc.data.total
      this.to = suc.data.to
      console.log(this.lastPage); 
      this.isLoader = true

    })
  }

  increment() {
    if (this.last) {
      if (this.page < this.lastPage) {
        this.page = this.page + 1
        this.filterProductData()
      }
    }


  }
  decrement() {
    if (this.page > 1) {
      this.page = this.page - 1
      this.filterProductData()
    }

  }
  pageValue(no: number) {
    this.page = no
    console.log(this.page);
    this.filterProductData()
  }
  seachName(name: string) {
    this.name = (name && name.trim())
    this.filterProductData()
  }

  logOut() {
    localStorage.clear()
    this.router.navigateByUrl('login')

  }

  trackByproductData(index: number, product: any): string {
      return product.product_name
  }
}
