import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./partial/dashboard/dashboard.component";
import { LoginComponent } from "./partial/login/login.component";
import { OutGuardGuard } from "./config/guard/out-guard.guard";
import { InGuardGuard } from "./config/guard/in-guard.guard";
import { MenuComponent } from "./partial/menu/menu.component";

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full' 
  },
  {
    path:'login',
    component:LoginComponent,
    canActivate:[InGuardGuard]
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[OutGuardGuard],
    
   
  },
  {
    path:'categories',
    loadChildren:() => import("./pages/admin/categories/categories.module").then( (m) => m.CategoriesModule ),
    canActivate:[OutGuardGuard]
  },
  {
    path:'product',
    loadChildren:() => import("./pages/admin/products/products.module").then( (m) => m.ProductsModule ),
    canActivate:[OutGuardGuard]
  },
  {
    path:'users',
    loadChildren:() => import("./pages/users/users/users.module").then( (m) => m.UsersModule ),
    canActivate:[OutGuardGuard]
  },
   ]

   @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  