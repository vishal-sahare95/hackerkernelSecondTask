import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path:'categories',
    loadChildren:() => import("./pages/admin/categories/categories.module").then( (m) => m.CategoriesModule ),
  },
  {
    path:'product',
    loadChildren:() => import("./pages/admin/products/products.module").then( (m) => m.ProductsModule ),
  },
   ]

   @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  