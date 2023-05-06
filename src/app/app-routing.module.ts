import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './partials/login/login.component';
import { ViewComponent } from './partials/view/view.component';

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'view',
    component: ViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
