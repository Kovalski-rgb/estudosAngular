import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DragDirective } from './dragDrop.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, DragDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }

