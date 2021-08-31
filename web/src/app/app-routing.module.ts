import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Reto1Component } from './pages/reto1/reto1.component';
import { Reto2Component } from './pages/reto2/reto2.component';

const routes: Routes = [{
  path:'reto1', component:Reto1Component
},{
  path:'reto2', component:Reto2Component
},{
  path:'', component:Reto1Component
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
