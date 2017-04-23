import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NewRecipeComponent} from './new-recipe.component';
import {NewStepModule} from '../new-step/new-step.module';
import {NewIngredientsModule} from '../new-ingredients/new-ingredients.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NewStepModule,
    NewIngredientsModule
  ],
  declarations: [NewRecipeComponent],
  exports: [NewRecipeComponent]

})
export class NewRecipeModule {
}
