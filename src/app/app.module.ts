import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NoFileScreenComponent } from './screens/no-file-screen/no-file-screen.component';
import { AppRoutingModule } from './app-routing.module';
import { FileUploaderDirective } from './utils/fileUploader/file-uploader.directive';

@NgModule({
  declarations: [
    AppComponent,
    NoFileScreenComponent,
    FileUploaderDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
