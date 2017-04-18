import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RecipeComponent} from "./recipe-page.component";
import {RecipeStepModule} from "../recipe-step/recipe-step.module";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
    RecipeStepModule
  ],
  declarations: [RecipeComponent],
  exports: [RecipeComponent]
})
export class RecipeModule { }
