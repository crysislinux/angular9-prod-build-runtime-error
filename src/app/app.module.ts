import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotLazyModule } from './notlazy/notlazycomp.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NotLazyModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
