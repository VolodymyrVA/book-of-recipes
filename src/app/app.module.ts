import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Service } from '../shared/data-service/service'

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {routes} from "./app.router";

import {AuthModule} from "./auth/auth.module";

import {HeaderComponent} from "./header/header.component";

import {LoginModule} from "./login/login.module";
import {SingupModule} from "./singup/singup.module";
import {GetrecipesModule} from "./getrecipes/getrecipse.module";
import {ContentModule} from './content/content.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),

    AuthModule,
    LoginModule,
    ContentModule,
    SingupModule,
    GetrecipesModule
  ],
  providers: [
    Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
