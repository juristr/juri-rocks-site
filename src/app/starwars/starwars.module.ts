import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActorsComponent } from './actors.component';

const routes = [
  {
    path: '',
    component: ActorsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [ActorsComponent]
})
export class StarwarsModule { }
