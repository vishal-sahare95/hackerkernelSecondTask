import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleComponent } from './standalone-components/simple/simple.component';
import { ProductComponent } from './standalone-components/product/product.component';
import{ HttpClientModule} from '@angular/common/http';
import { SipmleSecondComponent } from './standalone-components/sipmle-second/sipmle-second.component'
@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    SipmleSecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
