import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ResultFieldComponent } from './core/components/result-field/result-field.component'
import { HomePageComponent } from './core/home-page/home-page.component';

const routes: Routes = [
 {path: '', component:HomePageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [ResultFieldComponent]
