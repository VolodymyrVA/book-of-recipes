import { AuthRouter } from "./auth/auth.router";
import { Routes } from "@angular/router";
import {HomeRouter} from "./home-page/home-page.router";
import {LoginRouter} from "./auth/login/login.router";
import {RegistrationRouter} from "./auth/registration/registration.router";
import {RecipeRouter} from "./recipe-page/recipe-page.router";


export const routes: Routes = [

  AuthRouter,
  HomeRouter,
  LoginRouter,
  RegistrationRouter,
  RecipeRouter,
  {
    path: '',
    redirectTo: 'home-page',
    pathMatch: 'full'
  }
];
