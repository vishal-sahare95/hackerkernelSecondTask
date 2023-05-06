import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { CategoriesService } from 'src/app/config/login/admin/categories/categories.service';
import { Product } from 'src/app/config/login/admin/products/product';
import { ProductService } from 'src/app/config/login/admin/products/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  customers: Product[] = [];
  categories = this.categorySRV.getAllCategories()
  first = 0;

  rows = 10;
  productTitle?: string
  price_min?: number
  price_max?: number
  categoryId?: number
  isShowFilter: boolean = false
  constructor(private ProductSRV: ProductService, private categorySRV: CategoriesService) { }

  ngOnInit() {
    this.getAllProduct()

  }
  getAllProduct(){
    this.ProductSRV.getAllProducts().subscribe(customers => this.customers = customers);
    this.getFilterData()
  }

  getFilterData() {
    this.ProductSRV.getFilterProducts(this.productTitle, this.price_min, this.price_max, this.categoryId,)
      .subscribe(products => {
        this.customers = products
        console.log(products);
        console.log(this.customers);

      }
      )
  }
  deleteproduct(id:number){
    this.ProductSRV.deleteProduct(id).subscribe(suc=>{
      this.getAllProduct()
    })

  }
  valueCheck(id: number | undefined) {
    this.categoryId = id

  }

  filterShow() {
    this.isShowFilter = !this.isShowFilter
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.customers ? this.first === (this.customers.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.customers ? this.first === 0 : true;
  }

}