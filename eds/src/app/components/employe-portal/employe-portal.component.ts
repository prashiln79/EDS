import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { filter } from 'rxjs/operators';
import { searchEmployes } from 'src/app/actions/employe.actions';
import { state } from '@angular/animations';
import { Router } from '@angular/router';
import { Logout } from 'src/app/actions/login.actions';


@Component({
  selector: 'app-employe-portal',
  templateUrl: './employe-portal.component.html',
  styleUrls: ['./employe-portal.component.scss']
})
export class EmployePortalComponent implements OnInit {

  displayedColumns: string[] = ['name', 'position', 'department', 'age'];
  dataSource: any = [];


  constructor(private store: Store<State>,public router: Router) {
    this.getEmployeList();
  }

  getEmployeList() {
    this.store.select(state => (this.filter(state.employe.employes,state.employe.searchValue)))
    .subscribe((data:any) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.store.dispatch({ type: '[GET] All Employe list' })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.store.dispatch(searchEmployes({searchData:filterValue.trim().toLowerCase()}));
  }

  ngOnInit(): void {
  }

  filter(array:any,filterValue:any){
    return array.filter((data:any)=>((data.name.trim().toLowerCase()).substr(0,filterValue.length) == filterValue));
  }

  logout(){
    this.router.navigate(['']);
    this.store.dispatch(Logout());
  }
}
