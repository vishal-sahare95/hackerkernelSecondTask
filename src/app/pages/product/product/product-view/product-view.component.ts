import { Component } from '@angular/core';
import { ProductService } from 'src/app/config/product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent {
  constructor(private productySRV:ProductService){}
  ngOnInit():void{
  this.productySRV.getfilterdata().subscribe(suc=>{
    console.log(suc);
    
  },
  (err)=>{
    console.log(err);
    
  }
  )
  }
}
