import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Categories } from 'src/app/config/login/admin/categories/categories';
import { CategoriesService } from 'src/app/config/login/admin/categories/categories.service';
import { Product } from 'src/app/config/login/admin/products/product';
import { ProductService } from 'src/app/config/login/admin/products/product.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit  {
  public categoriesArr:Categories[]=[]
  public productsARR:Product[]=[]
  form:FormGroup

  erroMSG={
    title:[
      {type:'required', message:'enter title'}
    ],
    price:[{type:'required', message:'enter price'}],
    description:[{type:'required', message:'enter description'}],
    categoryId:[{type:'required', message:'enter category'}],
    images:[{type:'required', message:'enter images'}],
  }
  constructor( private fb:FormBuilder,private categoriesSRV
    :CategoriesService, private produtsSRV:ProductService){
    this.form=this.fb.group({
      title:[''],
      price:[],
      description	:[""],	
      categoryId:[],
      images:	[["https://placeimg.com/640/480/any?r=0.9178516507833767"]]	
    })
  }
  ngOnInit(): void {
    this.getAllDatacategories()

  }
  get title(){
    return this.form.get('title')
  }
  get price(){
    return this.form.get('price')
  }
  get description(){
    return this.form.get('description')
  }
  get categoryId(){
    return this.form.get('categoryId')
  }
  get images(){
    return this.form.get('images')
  }
  getAllDatacategories(){
    this.categoriesSRV.getAllCategories().subscribe(suc=>{
    this.categoriesArr=suc
    console.log(this.categoriesArr);

    })
  }
  getAllDataProducts(){
    this.produtsSRV.getAllProducts().subscribe(suc=>{
      this.productsARR=suc
      console.log(this.productsARR);
  
      })
  }

  saveData(){
    debugger
    console.log(this.form.value);
    this.produtsSRV.postProduct(this.form.value).subscribe(suc=>{
      console.log(suc);
      

    },
    err=>{
alert('sdgj')
    })

  }


}
