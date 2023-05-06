import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.modul';
import { LoginComponent } from './partial/login/login.component';
import { MenuComponent } from './partial/menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { CategoriesModule } from './pages/admin/categories/categories.module';
import {MatCardModule} from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChipsModule } from 'primeng/chips';
import { DashboardComponent } from './partial/dashboard/dashboard.component';
import { InterceptorInterceptor } from './config/interceptor.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CategoriesModule,
    MatCardModule,
    NgbModule,
    ChipsModule
  ],
  providers: [
    // {
    //   provide:HTTP_INTERCEPTORS,
    //   useClass:InterceptorInterceptor,
    //   multi:true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
