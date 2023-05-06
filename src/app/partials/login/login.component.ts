import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/config/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {
    userData:any={}
  isShowPassword:boolean=false
  errorMSG = {
      username: [
          { type: 'required', message: 'username is required' }
      ],
      password: [
          { type: 'required', message: 'password is required' }
      ],
  }

  
  public form: FormGroup;
  constructor(private fb: FormBuilder,private loginSRV:LoginService ,  private router: Router) {
      this.form = this.fb.group({
        username: ['', [Validators.required]],
        password: ['123456', [Validators.required]],
      })
    
  }

  ngOnInit(): void {
     
  }
  ngAfterViewInit(): void {
  }

  get username() {
      return this.form.get('username')
  }
  get password() {
      return this.form.get('password')
  }
  login(){
    this.loginSRV.post(this.form.value).subscribe(suc=>{
        localStorage.setItem('token',JSON.stringify(suc.data.api_token))
        localStorage.setItem('data',JSON.stringify(suc))
        this.userData=suc
        console.log(this.userData);
        alert(suc.message)
        this.router.navigateByUrl('/view')
    },
    (error)=>{
        alert('something wrong')
    }
    )
  }
  togglePAssword(){
    this.isShowPassword=!this.isShowPassword; 
}
}
