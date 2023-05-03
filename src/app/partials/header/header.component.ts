import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    loginData: any

    ngOnInit(): void {
        debugger
        this.loginData = JSON.parse(sessionStorage.getItem('loginData') || '{}');
       
        console.log(this.loginData.role);
        
    }

}
