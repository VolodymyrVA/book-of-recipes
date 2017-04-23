import { AuthRouter } from "./auth/auth.router";
import { Routes } from "@angular/router";
import {HomeRouter} from "./home-page/home-page.router";
import {LoginRouter} from "./auth/login/login.router";
import {RegistrationRouter} from "./auth/registration/registration.router";
import {RecipeRouter} from "./recipe-page/recipe-page.router";
import {NewRecipeRouter} from './new-recipe/new-recipe.router';


export const routes: Routes = [

  AuthRouter,
  HomeRouter,
  LoginRouter,
  RegistrationRouter,
  RecipeRouter,
  NewRecipeRouter,
  {
    path: '',
    redirectTo: 'home-page',
    pathMatch: 'full'
  }
];
