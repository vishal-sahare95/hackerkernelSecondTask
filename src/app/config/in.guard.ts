import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login/login.service';

@Injectable({
  providedIn: 'root'
})
export class InGuard implements CanActivate {
  constructor(private router:Router, private loginSRV:LoginService){}
  canActivate() {     
      if(this.loginSRV.isLogin()){
      this.router.navigateByUrl('/products/list')
      return false;
      }
      return true
    
  }
  
}
