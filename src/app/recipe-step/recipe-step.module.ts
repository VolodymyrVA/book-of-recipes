import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeStepComponent } from "./recipe-step.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [RecipeStepComponent],
  exports: [RecipeStepComponent]
})
export class RecipeStepModule { }
