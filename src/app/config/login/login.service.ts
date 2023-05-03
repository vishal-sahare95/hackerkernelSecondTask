import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Login} from './login'
@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient) { }
    URL = 'http://localhost:3000/login';

    getlogin(): Observable<Login[]> {
        return this.http.get<Login[]>(this.URL)
    }
   

}
