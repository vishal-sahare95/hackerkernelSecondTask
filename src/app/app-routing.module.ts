import { NgModule, SimpleChange } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleComponent } from './standalone-components/simple/simple.component';

const routes: Routes = [
  {
    path: 'product',
    children: [
      {
        path: 'list',
        loadComponent: () => import('./standalone-components/product/product.component').then(m => m.ProductComponent)
      },

      {
        path: 'add',
        loadComponent: () => import('./standalone-components/add-product/add-product.component').then(m => m.AddProductComponent)
      },
      {
        path: ':id',
        loadComponent: () => import('./standalone-components/add-product/add-product.component').then(m => m.AddProductComponent)
      },

    ]
  },
  {
    path:'category',
    children:[
      {
        path:'list',
        loadComponent:()=>import('./standalone-components/categories/categories.component').then(m=>m.CategoriesComponent)
      },
      {
        path:'add',
        loadComponent:()=>import('./standalone-components/addcategories/addcategories.component').then(m=>m.AddcategoriesComponent)
      },
      {
        path:':id',
        loadComponent:()=>import('./standalone-components/addcategories/addcategories.component').then(m=>m.AddcategoriesComponent)
      },
    
    ]
  },
  {
    path: 'simple',
    component: SimpleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
