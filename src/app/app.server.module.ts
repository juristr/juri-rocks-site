import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
// import { StarwarsModule } from './starwars/starwars.module';
// import { HomeModule } from './home/home.module';

import {  CreateElementRef, NodeCreateElementRef } from "./globalRefs";

import { AppComponent } from './app.component';

@NgModule({
  imports: [
	  ServerModule,
	  AppModule
    // ,
    // StarwarsModule,
    // HomeModule
  ],
  bootstrap: [
	  AppComponent
  ],
  providers: [
    { provide: CreateElementRef, useClass: NodeCreateElementRef }
  ]
})
export class AppServerModule {}
