import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import{ReactiveFormsModule} from '@angular/forms'
@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  values: string = ''
  public form: FormGroup;
  public isSnapShotID?:number;
  categoriesArr:any=[]
  erroMSG = {
    title: [{ type: 'required', message: ' Title is required' }],
    price: [{ type: 'required', message: ' Price is required' }],
    description: [{ type: 'required', message: ' Description is required' }],
    categoryId: [{ type: 'required', message: ' Category is required' }],
    images: [{ type: 'required', message: ' Images is required' }],
}

  constructor(private fb: FormBuilder,  private router: Router, private activeRoute: ActivatedRoute,private http:HttpClient) {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ["", [Validators.required]],
      categoryId: ['', [Validators.required]],
      images: [["https://placeimg.com/640/480/any?r=0.9178516507833767"], [Validators.required]]
  })
}
ngOnInit(): void {
this.http.get('https://api.escuelajs.co/api/v1/categories').subscribe(suc=>{
  this.categoriesArr=suc
})
  this.getIdCategories()
  console.log('this i category');
  this.isSnapShotID=this.activeRoute.snapshot.params['id']

}
get title() {
  return this.form.get('title')
}
get price() {
  return this.form.get('price')
}
get description() {
  return this.form.get('description')
}
get categoryId() {
  return this.form.get('categoryId')
}
get images() {
  return this.form.get('images')
}
  saveData() {
      if (this.form.valid) {
          if (this.isSnapShotID) {
              this.http.put("https://api.escuelajs.co/api/v1/products/"+this.isSnapShotID,this.form.value).subscribe(suc=>{
            
               console.log(suc);
              this.router.navigateByUrl('product/list')
              },
              (error)=>{
                console.log('something wrong');
                
              }
              )
          }
          else {
              this.http.post("https://api.escuelajs.co/api/v1/products/",this.form.value).subscribe(suc=>{
                debugger
                console.log(suc);
                
                this.router.navigateByUrl('product/list')
              },
              (error)=>{
                debugger
                console.log('something wrong');
              })
          }
      } else {
          this.form.markAllAsTouched()
          this.form.markAsTouched()

      }

  }

  getIdCategories() {
      const nid = this.activeRoute.snapshot.params['id']
      if(nid){
        this.http.get('https://api.escuelajs.co/api/v1/products/'+nid).subscribe((suc:any)=>{
          console.log(suc);
          
          this.form = this.fb.group({
            title: [suc.title],
            price: [suc.price],
            description: [suc.description],
            categoryId: [suc.category?.id],
            images: [["https://placeimg.com/640/480/any?r=0.9178516507833767"], [Validators.required]]
        })
          console.log(this.form.value);
          
        })
     
   
  }

  }
}
