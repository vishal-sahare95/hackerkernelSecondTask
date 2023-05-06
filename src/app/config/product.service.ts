import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
url=  "https://developer.hackerkernel.com/demo/shreesaidarshan/public/api/product/list"
  constructor(private http:HttpClient) { }
getfilterdata(page?:number,name?:string,barcode?:number,nature?:any,category?:any, packing_type?:any,inventory_status?:any, get_all_deleted?:any,internal_tag?:any):Observable<any>{
  const params:any = {};
  if(page){
    params['page']=page
  } 
  if(name){
    params['name']=name
  } 
  if(barcode){
    params['barcode']=barcode
  } 
  if(nature){
    params['nature']=nature
  } 
  if(category){
    params['category']=category
  } 
  if(packing_type){
    params['packing_type']=packing_type
  } 
  if(inventory_status){
    params['inventory_status']=inventory_status
  } 
  if(get_all_deleted){
    params['get_all_deleted']=get_all_deleted
  } 
  if(internal_tag){
    params['internal_tag']=internal_tag
  } 
  return this.http.get<any[]>(this.url, { params });
}
}
