import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import {LoginModule} from "./login/login.module";
import {RegistrationModule} from "./registration/registration.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginModule,
    RegistrationModule
  ],
  declarations: [AuthComponent]
})
export class AuthModule { }
