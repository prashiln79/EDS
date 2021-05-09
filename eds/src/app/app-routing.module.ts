import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployePortalComponent } from './components/employe-portal/employe-portal.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService as AuthGuard } from './security/auth-guard.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'employe', component: EmployePortalComponent ,canActivate: [AuthGuard] 
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
