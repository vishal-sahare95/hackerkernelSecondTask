import { Component , OnInit} from '@angular/core';
import { LoginService } from './config/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ecomWEb';
  logInValue?:boolean
constructor(private loginSRV:LoginService,){}
  ngOnInit(): void {
    this.loginSRV.islogInValue.subscribe(suc => {
        this.logInValue = suc
    })
}

}
