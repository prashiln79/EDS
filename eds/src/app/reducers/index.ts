import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { employeReducer, EmployeState } from './employe.reducer';
import { LoginReducer, LoginState } from './login.reducer';


export interface State {
  employe:EmployeState,
  login:LoginState
  
}

export const reducers: ActionReducerMap<State> = {
  employe:employeReducer,
  login:LoginReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
