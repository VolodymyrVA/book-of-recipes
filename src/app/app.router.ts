import { AuthRouter } from "./auth/auth.router";
import { Routes } from "@angular/router";
import { LoginRouter } from "./login/login.router";
import {SingupRouter} from "./singup/singup.router";
import {GetrecipesRouter} from "./getrecipes/getrecipse.router";
import {ContentRouter} from './content/content.router';


export const routes: Routes = [

  AuthRouter,
  LoginRouter,
  ContentRouter,
  SingupRouter,
  GetrecipesRouter,
  {
    path: '',
    redirectTo: 'content-page',
    pathMatch: 'full'
  }
];
