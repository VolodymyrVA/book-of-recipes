import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NewIngredientsComponent} from './new-ingredients.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [NewIngredientsComponent],
  exports: [NewIngredientsComponent]

})
export class NewIngredientsModule {
}
