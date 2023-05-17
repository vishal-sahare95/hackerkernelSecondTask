import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/config/login/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  logInValue?: boolean
    
  constructor(private router: Router, private loginSRV: LoginService) {

  }
  ngOnInit(): void {
      this.loginSRV.islogInValue.subscribe(suc => {
        console.log(this.logInValue);
        
          this.logInValue = suc
          console.log(this.logInValue);
      })
  }

  
  logOut() {
      this.loginSRV.islogInValue.next(false)
      localStorage.setItem('token', '');
      this.router.navigateByUrl('login')
  }
}