import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { Product, ProductC } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url="https://api.escuelajs.co/api/v1/products"
  constructor(private http :HttpClient) { }

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.url)
  }
  postProduct(data:ProductC):Observable<ProductC>{
    return  this.http.post<ProductC>(this.url,data)

  }

}
