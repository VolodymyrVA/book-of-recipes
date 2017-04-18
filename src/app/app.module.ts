import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Service } from '../shared/data-service/service'

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {routes} from "./app.router";

import {AuthModule} from "./auth/auth.module";

import {HomeModule} from "./home-page/home-page.module";
import {TopNavigationModule} from "./top-navigation/top-navigation.module";
import {RecipeModule} from "./recipe-page/recipe-page.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),

    AuthModule,
    HomeModule,
    RecipeModule,
    TopNavigationModule
  ],
  providers: [
    Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
