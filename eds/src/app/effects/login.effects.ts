import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Login, LoginComplete, LoginError } from '../actions/login.actions';
import { LoginService } from '../service/login.service';



@Injectable()
export class LoginEffects {



  loadMovies$ = createEffect(() =>
  this.actions$.pipe(
    ofType(Login),
    mergeMap((data) => this.loginService.userLogin(data)
      .pipe(
        map(data => ( LoginComplete({ token: data.token}) )),
        catchError((error) => of(LoginError(error)))
      )
    )
  )
);

 
  constructor(private actions$: Actions,private loginService:LoginService ) {

  }

}
