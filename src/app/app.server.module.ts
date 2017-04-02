import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';

import {  GlobalRef, NodeGlobalRef } from "./globalRefs";

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
    { provide: GlobalRef, useClass: NodeGlobalRef }
  ]
})
export class AppServerModule {}
