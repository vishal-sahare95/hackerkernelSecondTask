import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/config/login/login.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit  {
  userData:any={}
constructor(private loginSRV:LoginService){}

ngOnInit(): void {
 const a=JSON.parse(localStorage.getItem('data')|| '')
 this.userData=a
 console.log(this.userData);
 
}

}
