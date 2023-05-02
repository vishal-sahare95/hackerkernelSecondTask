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
  logInValue?: boolean
  data: any
  errorMSG = {
    email: [
      { type: 'required', message: 'email is required' }
    ],
    password: [
      { type: 'required', message: 'password is required' }
    ],
  }


  public form: FormGroup;
  constructor(private fb: FormBuilder, private loginSRV: LoginService, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })

  }
  get email() {
    return this.form.get('email')
  }
  get password() {
    return this.form.get('password')
  }
  login() {
    this.loginSRV.getlogin().subscribe(suc => {
      debugger
      const user = suc.find(f => {
        return (f.email === this.form.value.email && f.password === this.form.value.password)
      })
      if(user){
        localStorage.setItem('loginData',JSON.stringify(user))  
      }

    })

  }
}
