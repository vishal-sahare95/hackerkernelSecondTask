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

    constructor() { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!request.url.includes('login')) {
        const accessToken = JSON.parse(localStorage.getItem('token') || '');
        const headerToken = request.clone({
            headers: request.headers.set('Authorization', `Bearer ${accessToken}`)
        });
        return next.handle(headerToken);
    }
    return next.handle(request);
}

}

