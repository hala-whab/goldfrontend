import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ContentTypeInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const request = req.clone({
            setHeaders: {
                'Content-Type': 'application/json',
            },
        });
        return next.handle(request).pipe(retry(2), catchError((error: HttpErrorResponse) => {
            if (error.status === 401 && this.router.url !== '/auth/login') {
                this.router.navigate(['/auth/logout']);
            }
            return throwError(error);
        }));
    }

}
