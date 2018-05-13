import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AutoCompleteModule} from 'primeng/autocomplete';


import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
        FormsModule,
    AutoCompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
