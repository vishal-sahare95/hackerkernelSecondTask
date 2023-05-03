import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  form:FormGroup
  constructor( private fb:FormBuilder){
    this.form=this.fb.group({
      
    })
  }

}
