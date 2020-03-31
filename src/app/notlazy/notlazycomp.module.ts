import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NotLazycompComponent } from './notlazycomp/notlazycomp.component';

const routes: Routes = [
  {
    path: 'not-lazy',
    component: NotLazycompComponent
  }
];

@NgModule({
  declarations: [
    NotLazycompComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class NotLazyModule { }
