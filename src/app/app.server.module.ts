import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';

import {  CreateElementRef, NodeCreateElementRef } from "./globalRefs";

import { AppComponent } from './app.component';

@NgModule({
  imports: [
	  ServerModule,
	  AppModule
  ],
  bootstrap: [
	  AppComponent
  ],
  providers: [
    { provide: CreateElementRef, useClass: NodeCreateElementRef }
  ]
})
export class AppServerModule {}
