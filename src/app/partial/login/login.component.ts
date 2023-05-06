import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/config/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isShowPassword:boolean=false
  errorMSG = {
      email: [
          { type: 'required', message: 'email is required' }
      ],
      password: [
          { type: 'required', message: 'password is required' }
      ],
  }

  
  public form: FormGroup;
  constructor(private fb: FormBuilder,private loginSRV:LoginService ,  private router: Router) {
      this.form = this.fb.group({
          email: ['john@mail.com', [Validators.required]],
          password: ['changeme', [Validators.required]],
      })
    
  }

  ngOnInit(): void {
     
  }

  get email() {
      return this.form.get('email')
  }
  get password() {
      return this.form.get('password')
  }

  login() {
    debugger
      if (this.form.valid) {
        debugger
          this.loginSRV.postUser(this.form.value).subscribe(suc => {
            console.log(suc);
            localStorage.setItem('token', JSON.stringify(suc.access_token));
            
          },
          error=>{
            debugger
              alert('something wrong')
              // this.form.reset()
          }
          )
      }
      else {
          this.form.markAllAsTouched();
          this.form.markAsTouched();
      }
  }
  togglePAssword(){
      this.isShowPassword=!this.isShowPassword; 
  }
}
