import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SquareComponent } from './square/square.component';
import { ControlDotsComponent } from './control-dots/control-dots.component';

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    ControlDotsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
