import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Login } from 'src/app/actions/login.actions';
import { State } from 'src/app/reducers';
import { LoginState } from 'src/app/reducers/login.reducer';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error: string = '';
  form: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private store:Store<State>,public router: Router,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getLoginData();
  }

  getLoginData(){
    this.store.select('login').subscribe((data:LoginState)=>{
      if(data.loggedIn){
        this.router.navigate(['employe']);
      }
    });
  }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.store.dispatch(Login({data:this.form.value}));
    }else{
      this._snackBar.open('Username : test Password : test ', 'close',{
        duration: 3000
      });
    }
  }

}
