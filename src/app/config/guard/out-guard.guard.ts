import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class OutGuardGuard implements CanActivate {
  constructor(private loginSRV:LoginService,private router:Router){}
  canActivate(){
    if(this.loginSRV.isLogin()){
      return true;
    }
    this.router.navigateByUrl('/login')
    return false
  }
  
}
