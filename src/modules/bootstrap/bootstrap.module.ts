import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BootstrapComponent } from './bootstrap.component';

@NgModule({
  declarations: [
    BootstrapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [BootstrapComponent]
})
export class BootstrapModule { }
