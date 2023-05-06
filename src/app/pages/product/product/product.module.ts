import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { ProductViewComponent } from './product-view/product-view.component';



@NgModule({
  declarations: [
    ViewComponent,
    ProductViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ProductViewComponent
  ]
})
export class ProductModule { }
