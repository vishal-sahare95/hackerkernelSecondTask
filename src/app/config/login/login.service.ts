import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  URL='  http://localhost:3000/login'
  getlogin():Observable<any[]>{
    return this.http.get<any[]>(this.URL)
  }
}
