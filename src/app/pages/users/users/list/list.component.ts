import { Component,OnInit } from '@angular/core';
import { Users } from 'src/app/config/users/users';
import { UsersService } from 'src/app/config/users/users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public usersARR:Users[]=[]


  constructor(private usserSRV:UsersService){}

  ngOnInit(): void {
    this.getAllUsers()
  }
  getAllUsers(){
    
    this.usserSRV.getAllUsers().subscribe(suc=>{
      this.usersARR=suc
      console.log(suc);
      console.log(this.usersARR);
      
    })
  }
  deleteUser(id:number){
    this.usserSRV.deleteUser(id).subscribe(suc=>{
      this.getAllUsers()
    })
  }

}
