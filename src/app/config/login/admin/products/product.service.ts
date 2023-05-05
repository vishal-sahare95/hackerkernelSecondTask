import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { Product, ProductC, ProductPG } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url="https://api.escuelajs.co/api/v1/products/"
  constructor(private http :HttpClient) { }

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.url)
  }
  postProduct(data:ProductC):Observable<ProductC>{
    return  this.http.post<ProductC>(this.url,data)
  }
  getByIdProduct(id:number):Observable<ProductC>{
    return  this.http.get<ProductC>(this.url+id)
  }
  putProduct(id:number,data:ProductC):Observable<ProductC>{
    return  this.http.put<ProductC>(this.url+id,data)
  }
  deleteProduct(id:number):Observable<ProductC>{
    return  this.http.delete<ProductC>(this.url+id)
  }

  getPeg(query:string=""): Observable<ProductPG> {
    return this.http.get<ProductPG>(this.url + query);
  }

  getFilterProducts(title?: string, price_min?: number, price_max?: number, categoryId?: number, offset?: number, limit?: number): Observable<any[]> {
    const params:any = {};
    if (title) {
      params['title'] = title;
    }
    if (price_min) {
      params['price_min'] = price_min.toString();
    }
    if (price_max) {
      params['price_max'] = price_max.toString();
    }
    if (categoryId) {
      params['categoryId'] = categoryId.toString();
    }
    if (offset) {
      params['offset'] = offset.toString();
    }
    if (limit) {
      params['limit'] = limit.toString();
    }
    return this.http.get<any[]>(this.url, { params });
  }
}




