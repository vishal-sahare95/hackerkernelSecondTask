import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login/login.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  
    constructor(private logimnSRV: LoginService) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        if (!request.url.includes('user-login-v2')) {
            const accessToken = JSON.parse(localStorage.getItem('token') || '');
            const headerToken = request.clone({
                headers: request.headers.set('Authorization', `Bearer ${accessToken}`)
            });
            return next.handle(headerToken);
        }
        return next.handle(request);
    }


}

