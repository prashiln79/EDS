import { createAction, props } from '@ngrx/store';

export const Login = createAction(
  '[Login]  Logins',props<{ data: any }>()
);

export const Logout = createAction('[Login]  Logins');

export const LoginComplete = createAction(
  '[Login] Logins Success',
  props<{ token: any }>()
);

export const LoginError = createAction(
  '[Login] Logins Failure',
  props<{ error: any }>()
);
