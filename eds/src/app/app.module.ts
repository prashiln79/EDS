import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { EmployeEffects } from './effects/employe.effects';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployePortalComponent } from './components/employe-portal/employe-portal.component';
import { MatInputModule } from '@angular/material/input';
import { LoginEffects } from './effects/login.effects';
import { MatTableModule } from '@angular/material/table';
import { TokenInterceptor } from './security/token.interceptor';
import { AuthGuardService } from './security/auth-guard.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployePortalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([EmployeEffects]),
    HttpClientModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    EffectsModule.forFeature([LoginEffects]),
    MatTableModule,
    MatSnackBarModule

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
