import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { LoginState } from '../reducers/login.reducer';
@Injectable()
export class AuthGuardService implements CanActivate {
    flag: Boolean = false;
    constructor(private store: Store<State>, public router: Router) {
        this.store.select('login').subscribe((data: LoginState) => {
            this.flag = data.loggedIn;
        });
    }
    canActivate(): boolean {
        if (!this.flag) {
            this.router.navigate(['']);
            return false;
        }
        return true;
    }
}