import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, } from 'rxjs';
import { Login, LoginC } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  islogInValue=new BehaviorSubject(this.isLogin())
  url="https://api.escuelajs.co/api/v1/auth/login"
  userurl="https://api.escuelajs.co/api/v1/auth/profile"
  constructor(private http:HttpClient) { }

  getUser():Observable<Login[]>{
    return this.http.get<Login[]>(this.url)
  }
  postUser(data: LoginC) {
    return this.http.post<LoginC>(`${this.url}`, data)
  }
  isLogin(){
   return !! localStorage.getItem('token')
  }
  getUserProfile():Observable<Login[]>{
    return this.http.get<Login[]>(this.userurl)
  }

}
