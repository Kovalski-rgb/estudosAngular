import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './assignment/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './assignment/success-alert/success-alert.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { FormsModule } from '@angular/forms';
import { Assignment02Component } from './assignment02/assignment02.component';
import { InstructorsTakeAs02Component } from './assignment02/instructors-take-as02/instructors-take-as02.component';

@NgModule({
  // declara que tal componente existe
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    AssignmentComponent,
    Assignment02Component,
    InstructorsTakeAs02Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
