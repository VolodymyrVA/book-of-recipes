import {Route} from "@angular/router";
import {GetrecipesComponent} from "./getrecipes.component";

export const GetrecipesRouter: Route = {
  path: 'getrecipes-page/:id',
  component: GetrecipesComponent
};
