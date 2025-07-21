import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private loading$ = new BehaviorSubject<boolean>(false);
  get isLoading(): Observable<boolean> {
    return this.loading$.asObservable();
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loading$.next(true);
    return next.handle(req).pipe(finalize(() => this.loading$.next(false)));
  }
}
