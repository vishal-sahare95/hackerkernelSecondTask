import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/config/login/login';
import { LoginService } from 'src/app/config/login/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
   localData:any
   loginDataARR:Login[]=[]
   constructor(private loginDataSRV:LoginService){}
  ngOnInit(): void {
    this.localData= JSON.parse(sessionStorage.getItem('loginData') || '{}')
    console.log(this.localData);

    this.loginDataSRV.getlogin().subscribe(suc=>{
      this.loginDataARR=suc
    })

    
  }
}
