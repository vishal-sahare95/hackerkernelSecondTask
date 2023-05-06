import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class InGuardGuard implements CanActivate {
  constructor(private loginSRV:LoginService, private router:Router){}
  canActivate(){
    if (this.loginSRV.isLogin()) {
      this.router.navigate(['/dashboard'])
      return false
  } else {
      return true
  }
  }
  
}
