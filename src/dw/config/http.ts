import {HttpEvent} from '@angular/common/http';
import {HttpHandler} from '@angular/common/http';
import {HttpInterceptor} from '@angular/common/http';
import {HttpRequest} from '@angular/common/http';

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

export class TokenInterceptor implements HttpInterceptor{

    constructor()
    {
        //console.log("TokenInterceptor::constructor() called.")

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
    {
        //console.log("TokenInterceptor::intercept() called.");

        request = request.clone({
            setHeaders: {
                "Content-Type": 'application/json; charset=utf-8'
            }
        })

        return next.handle(request);
    }

}
