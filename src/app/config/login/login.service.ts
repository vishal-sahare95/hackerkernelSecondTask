import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './login';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginUserData:any=new  Subject<any>()
  url="https://developer.hackerkernel.com/demo/shreesaidarshan/public/api/user-login-v2"
  constructor(private http:HttpClient) { }
  post(data:Login):Observable<any>{
    return this.http.post<any>(this.url, data);
  }



}
