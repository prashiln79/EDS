import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { State } from '../reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoginState } from '../reducers/login.reducer';



@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    token:String = '';
  constructor(private store:Store<State>) {
    this.store.select('login').subscribe((data:LoginState)=>{
        this.token = data.token;
    });
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.token}`
      }
    });
    return next.handle(request);
  }
}