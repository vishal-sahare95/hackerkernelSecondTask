import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  data:any

  ngOnInit(): void {
   this.data= localStorage.getItem(('loginData'))
console.log(this.data);


  }

}
