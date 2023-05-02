import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './partials/login/login.component';
import { DashboardComponent } from './partials/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent

  },
  {
    path:'dashboard',
    component:DashboardComponent

  },
  {
    path:'admin',
    loadChildren:()=>import("./pages/admin/admin.module").then(m=>m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
