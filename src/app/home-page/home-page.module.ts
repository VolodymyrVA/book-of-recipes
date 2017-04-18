import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HomeComponent} from "./home-page.component";
import {SearchModule} from "../search/search.module";

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    SearchModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]

})
export class HomeModule {
}
