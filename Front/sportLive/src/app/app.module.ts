import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultFieldComponent } from './core/components/result-field/result-field.component';
import { HomePageComponent } from './core/home-page/home-page.component';
import { BoardComponent } from './core/board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    HomePageComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }