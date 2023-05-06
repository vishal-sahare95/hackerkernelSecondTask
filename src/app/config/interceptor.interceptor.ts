import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  // intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  // const localToken=JSON.parse(localStorage.getItem('token')|| '');
  // console.log(localToken )
  
  // request=request.clone({headers:request.headers.set('Authorization','bearer'+localToken)})
  // return next.handle(request);
  // }
// }



intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  const token =  JSON.parse(localStorage.getItem('token')|| '');
  if (token) {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
 


  return next.handle(request);
}


}