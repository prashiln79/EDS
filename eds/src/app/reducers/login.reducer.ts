import { Action, createReducer, on } from '@ngrx/store';
import { Login, LoginComplete, LoginError, Logout } from '../actions/login.actions';



export interface LoginState {
  user: String;
  loggedIn: boolean;
  isLoading: boolean;
  errorMessage: String;
  hasError: boolean;
  token:String;
}

export const initialState: LoginState = {
  user: '',
  loggedIn: false,
  isLoading: false,
  errorMessage: '',
  hasError: false,
  token:''
};


export const LoginReducer = createReducer(
  initialState,
  on(Login, (state) => ({
    user: '',
    loggedIn: false,
    isLoading: true,
    errorMessage: '',
    hasError: false,
    token:''
  })),

  on(LoginComplete, (state,data:any) => ({
    user: 'Test',
    loggedIn: true,
    isLoading: false,
    errorMessage: '',
    hasError: false,
    token:data.token
  })),

  on(LoginError, (state,data:any) => ({
    user: '',
    loggedIn: false,
    isLoading: false,
    errorMessage: data,
    hasError: true,
    token:''
  })),

  on(Logout, (state,data:any) => ({
    user: '',
    loggedIn: false,
    isLoading: false,
    errorMessage: data,
    hasError: false,
    token:''
  })),

  
);

