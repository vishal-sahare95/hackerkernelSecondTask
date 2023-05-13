import { NgModule, SimpleChange } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleComponent } from './standalone-components/simple/simple.component';

const routes: Routes = [
  {
    path:'product',
    loadComponent:()=>import('./standalone-components/product/product.component').then(m=>m.ProductComponent)
  },
  {
    path:'simple',
    component:SimpleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
