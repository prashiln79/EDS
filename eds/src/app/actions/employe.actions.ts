import { createAction, props } from '@ngrx/store';

export const getEmployesList = createAction(
  '[Employe] add Employes'
);

export const searchEmployes = createAction(
  '[Employe] search Employes',
  props<{ searchData: String }>()
);

export const loadEmployesSuccess = createAction(
  '[Employe] Load Employes Success',
  props<{ payload: any }>()
);

export const loadEmployesFailure = createAction(
  '[Employe] Load Employes Failure',
  props<{ error: any }>()
);
