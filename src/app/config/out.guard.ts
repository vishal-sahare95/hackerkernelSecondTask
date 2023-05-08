import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login/login.service';

@Injectable({
  providedIn: 'root'
})
export class OutGuard implements CanActivate {
  constructor(private router:Router, private loginSRV:LoginService){}
  canActivate(){
      
      if(this.loginSRV.isLogin()){
      return true;
      }
      this.router.navigateByUrl('/login')
      return false
    
  
  }
  
}
