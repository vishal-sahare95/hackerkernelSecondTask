import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url=  "https://api.escuelajs.co/api/v1/products"
  constructor(private http:HttpClient) { }
getfilterdata(offset?:number,limit?:number):Observable<any>{

  const params:any = {};
  if(offset){
    params['offset']=offset
  } 
  if(limit){
    params['limit']=limit
  } 
  
  return this.http.get<any[]>(this.url, { params });
}
}
