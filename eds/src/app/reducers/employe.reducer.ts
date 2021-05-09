import { Action, createReducer, on } from '@ngrx/store';
import { getEmployesList, loadEmployesSuccess, searchEmployes } from '../actions/employe.actions';


export const employeFeatureKey = 'employe';


export interface EmployeState {
  employes: Array<any>
  searchValue: String;
}

export const initialState: EmployeState = {
  employes: [],
  searchValue: '',
};


export const employeReducer = createReducer(
  initialState,
  on(getEmployesList, (state, data: any) => ({ ...state, data })),
  on(searchEmployes, (state, data: any) => ({...state,searchValue: data.searchData} )),
  on(loadEmployesSuccess, (state, data: any ) => ({...state,employes: [...data.payload]})),
);

