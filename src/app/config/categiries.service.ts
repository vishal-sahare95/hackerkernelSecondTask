import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategiriesService {

  constructor(private http:HttpClient) { }
  getCategories(){
    return this.http.get('https://api.escuelajs.co/api/v1/categories')
  }
  getIdCategories(id:number){
    return this.http.get('https://api.escuelajs.co/api/v1/categories/'+id)
  }
  postCategories(data:any){
    return this.http.post('https://api.escuelajs.co/api/v1/categories',data)
  }
  putCategories(id:number,data:any){
    return this.http.put('https://api.escuelajs.co/api/v1/categories/'+id,data)
  }
  deleteCategories(id:number){
    return this.http.delete('https://api.escuelajs.co/api/v1/categories/'+id)
  }
}
