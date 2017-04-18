import {Route} from "@angular/router";
import {RecipeComponent} from "./recipe-page.component";

export const RecipeRouter: Route = {
  path: 'recipe-page/:id',
  component: RecipeComponent
};
