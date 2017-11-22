import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {  MatButtonModule, 
          MatDialogModule } from '@angular/material';       


import { AppComponent } from './app.component';
import { MarkersService } from './services/markers.service';
import { MarkerInfoComponent } from './dialogs/marker-info/marker-info.component';


@NgModule({
  declarations: [
    AppComponent,
    MarkerInfoComponent
  ],
  imports: [
    MatButtonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    BrowserModule
  ],
  providers: [
  	MarkersService
  ],
  entryComponents: [
    MarkerInfoComponent
  ],   
  bootstrap: [AppComponent]
})
export class AppModule { }
