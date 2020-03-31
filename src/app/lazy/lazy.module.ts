import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LazycompComponent } from './lazycomp/lazycomp.component';

const routes: Routes = [
  {
    path: '',
    component: LazycompComponent
  }
];

@NgModule({
  declarations: [
    LazycompComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class LazyModule { }
