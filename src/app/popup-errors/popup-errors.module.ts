import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {PopupErrorsComponent} from "./popup-errors.component";

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule
  ],
  declarations: [PopupErrorsComponent],
  exports: [PopupErrorsComponent]

})
export class PopupErrorsModule {
}
