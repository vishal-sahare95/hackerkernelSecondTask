import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { CategoriesService } from 'src/app/config/login/admin/categories/categories.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl , form: FormGroupDirective ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

export class AddComponent {

  public  form:FormGroup;

  constructor(private fb:FormBuilder,private categoriesSRV:CategoriesService){
    this.form=this.fb.group({  
      name:[''],
      image: ['']
    })
  
  }

  saveData(){
    this.categoriesSRV.postCategories(this.form.value).subscribe(suc=>{
      console.log(suc);
      
    })

  }

}
