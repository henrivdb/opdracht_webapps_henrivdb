import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpModule} from '@angular/http';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { RegisterComponent } from './register/register.component';

const routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  providers: [
    AuthenticationService,
    AuthGuardService
  ],
  exports: [
  ]
})
export class UserModule { }
