import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { InstructorsTakeComponent } from './instructors-take/instructors-take.component';
import { MyAnswerComponent } from './my-answer/my-answer.component';
import { GameControlItComponent } from './instructors-take/game-control-it/game-control-it.component';
import { OddItComponent } from './instructors-take/odd-it/odd-it.component';
import { EvenItComponent } from './instructors-take/even-it/even-it.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    InstructorsTakeComponent,
    MyAnswerComponent,
    GameControlItComponent,
    OddItComponent,
    EvenItComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
