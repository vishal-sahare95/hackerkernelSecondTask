import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./partial/dashboard/dashboard.component";
import { LoginComponent } from "./partial/login/login.component";
import { OutGuardGuard } from "./config/guard/out-guard.guard";
import { InGuardGuard } from "./config/guard/in-guard.guard";

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'dashboard',
    component:DashboardComponent,
  },
  {
    path:'categories',
    loadChildren:() => import("./pages/admin/categories/categories.module").then( (m) => m.CategoriesModule ),
  },
  {
    path:'product',
    loadChildren:() => import("./pages/admin/products/products.module").then( (m) => m.ProductsModule ),
  },
  {
    path:'users',
    loadChildren:() => import("./pages/users/users/users.module").then( (m) => m.UsersModule ),
  },
   ]

   @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  