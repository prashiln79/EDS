import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EmployeService } from '../service/employe.service';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { loadEmployesSuccess } from '../actions/employe.actions';

@Injectable()
export class EmployeEffects {


  loadMovies$ = createEffect(() =>
  this.actions$.pipe(
    ofType('[GET] All Employe list'),
    mergeMap(() => this.employeService.getAll()
      .pipe(
        map(data => ( loadEmployesSuccess({ payload: data}) )),
        catchError(() => of({ type: '[Movies API] Movies Loaded Error' }))
      )
    )
  )
);

 
  constructor(private actions$: Actions,private employeService:EmployeService ) {

  }

}
