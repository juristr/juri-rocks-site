import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {  GlobalRef, BrowserGlobalRef } from "./globalRefs";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({
        appId: 'juri-rocks-site'
    }),
    FormsModule,
    HttpModule
  ],
  providers: [
    { provide: GlobalRef, useClass: BrowserGlobalRef }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
