import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories, CategoriesC } from './categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  url="https://api.escuelajs.co/api/v1/categories/"
  constructor(private http:HttpClient) { }
  getAllCategories():Observable<Categories[]>{
    return this.http.get<Categories[]>(this.url)
  }
  getIDCategories(id:number):Observable<CategoriesC>{
    return this.http.get<CategoriesC>(this.url+id)
  }
  postCategories(data:CategoriesC):Observable<CategoriesC>{
    return this.http.post<CategoriesC>(this.url ,data)
  }
  putCategories(id:number, data:CategoriesC):Observable<CategoriesC>{
    return this.http.put<CategoriesC>(this.url+id ,data)
  }
  deleteCategories(id:number){
    return this.http.delete<CategoriesC>(this.url+id)

  }
}
