import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './partials/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import{HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { TokenInterceptor } from './config/token.interceptor';
import { ViewComponent } from './partials/view/view.component';
import { ProductInterceptor } from './config/product.interceptor';
import { ProductModule } from './pages/product/product/product.module';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    HttpClientModule,
    ProductModule
    ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:ProductInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
