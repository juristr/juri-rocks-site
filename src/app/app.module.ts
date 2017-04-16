import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {  CreateElementRef, BrowserCreateElementRef } from "./globalRefs";

const routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  {path: 'starwars', loadChildren: './starwars/starwars.module#StarwarsModule' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({
        appId: 'juri-rocks-site'
    }),
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [
    { provide: CreateElementRef, useClass: BrowserCreateElementRef }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
