import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/config/users/users';
import { UsersService } from 'src/app/config/users/users.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  public usersArr: Users[] = []
  public form: FormGroup;
  public isEditFieldHide?:boolean;
  public snapshotID?:number
  public errorMSG = {
    email: [{ type: 'required', message: 'Email is required' }],
    password: [{ type: 'required', message: 'password is required' }],
    name: [{ type: 'required', message: 'name is required' }],
    avatar: [{ type: 'required', message: 'avatar is required' }],
  }
  constructor(private fb: FormBuilder, private usersSRV: UsersService, private activateRout: ActivatedRoute, private router: Router) {
    this.form = this.fb.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]],
      name: ["", [Validators.required]],
      avatar: ["https://api.lorem.space/image/face?w=640&h=480&r=867", [Validators.required]],
    })
    
  
      if (this.activateRout.snapshot.params['id']) {
        this.name?.setValidators([])
        this.avatar?.setValidators([])
      }

      else {
        this.name?.setValidators([Validators.required])
        this.avatar?.setValidators([Validators.required])
      }
  }

  ngOnInit(): void {
    this.getBYIDData()
    this.snapshotID= this.activateRout.snapshot.params['id']
    console.log(this.snapshotID);
    
  }

  get email() {
    return this.form.get('email')
  }
  get password() {
    return this.form.get('password')
  }
  get name() {
    return this.form.get('name')
  }
  get avatar() {
    return this.form.get('avatar')
  }
  saveData() {
    if (this.form.valid) {
      if (this.snapshotID) {
        this.usersSRV.putUsers(this.snapshotID, this.form.value).subscribe(suc => {
          console.log(suc);
          this.router.navigateByUrl('users/list')
        },
        (error)=>{
          console.log('something wrong');
          
        }
        )
      }
      else {
        console.log(this.isEditFieldHide);
        this.isEditFieldHide=false;
        this.usersSRV.postUsers(this.form.value).subscribe(suc => {
          console.log(suc);
          
          this.router.navigateByUrl('users/list')
        },
        (error)=>{
          console.log('something wrong');
          
        })
      }
    }
    else{
      this.form.markAllAsTouched()
      this.form.markAsTouched()
    }
  }

  getBYIDData() {
    const newId = this.activateRout.snapshot.params['id']
    console.log(newId);
    
    if(newId){

      this.usersSRV.getByIDUsers(newId).subscribe(suc => {
      console.log(suc);
      this.isEditFieldHide=true
      console.log(this.isEditFieldHide);
      this.form = this.fb.group({
        email: [suc.email],
        password: [suc.password],
      })
    },
    (error)=>{
      console.log('something wrong');
      
    })
    }
    
  }
}
