import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{ Observable} from 'rxjs'
import { Users } from './users';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public url="https://api.escuelajs.co/api/v1/users/"
  constructor(private http:HttpClient) { }
  getAllUsers():Observable<Users[]>{
    return  this.http.get<Users[]>(this.url)
  }
  getByIDUsers(id:number):Observable<Users>{
    return  this.http.get<Users>(this.url+id)
  }
  postUsers( data:Users):Observable<Users>{
    return  this.http.post<Users>(this.url,data)
  }
  putUsers(id:number,data:Users):Observable<Users>{
    return  this.http.put<Users>(this.url+id,data)
  }
  deleteUser( id:number):Observable<Users>{
    return  this.http.delete<Users>(this.url+id)

  }
}
