import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContentComponent} from './content.component'
import {RouterModule} from '@angular/router';
import {NavigationModule} from '../navigation/navigation.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    NavigationModule
  ],
  declarations: [ContentComponent],
  exports: [ContentComponent]

})
export class ContentModule {
}
