import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableTableComponent } from '../reusable-table/reusable-table.component';
import { CategiriesService } from 'src/app/config/categiries.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule,ReusableTableComponent],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
public categoriesData:any[]=[]
  list:any[]=[
    {'head':'category name', 'field':'name'},
    {'head':'img url', 'field':'image'},
    {'head':'action', 'field':''}
  ]
  constructor(private categoriesSRV:CategiriesService, private router:Router){}
  ngOnInit():void{
    this.categoriesSRV.getCategories().subscribe((suc:any)=>{
      console.log(suc);
      this.categoriesData=suc
    },
    (error)=>{
      console.log('sorry something wrong');
      
    }
    )
  }
  delete(item:any){
    
    this.categoriesSRV.deleteCategories(item.id).subscribe(suc=>{
      console.log(suc);
      
    },(error)=>console.log('something wrong')
    
    )

  }
  edit(item:any){
this.router.navigateByUrl('category/'+item.id)
    console.log(item);
  }

}
