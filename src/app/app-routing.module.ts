import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './partials/login/login.component';
import { ViewComponent } from './partials/view/view.component';
import { InGuard } from './config/in.guard';
import { OutGuard } from './config/out.guard';

const routes: Routes = [
  {
    path :'',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path:'login',
    component: LoginComponent,
    canActivate:[InGuard]
  },
  {
    path:'view',
    component: ViewComponent,
    
  },
  {
    path:'products',
    loadChildren:()=>import('./pages/products/products/products.module').then(m=>m.ProductsModule),
    canActivate:[OutGuard]
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
