import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  //  const localProduct='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7Im5hbWUiOiJkZXYgcmF0aG9yIiwiZW1haWwiOiJkZXYwMUBnbWFpbC5jb20iLCJ0aW1lIjoxNjgzMzc4MTkyLCJleHBpcmVkIjoiMjAyMy0wNS0wNyAwNzowMDowMCJ9fQ.BvjWG-aifJqp5hGAjMiNU-zH-weF235_0IeVNlDySs0'
  //   const data=localStorage.setItem('product',JSON.stringify(localProduct))
  // console.log(data);

  // let jwtToken=request.clone({setHeaders:{ Authorization:'bearer'+data}})
  return next.handle(request);
}
}
