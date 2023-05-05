import { Component,OnInit } from '@angular/core';
import { Categories } from 'src/app/config/login/admin/categories/categories';
import { CategoriesService } from 'src/app/config/login/admin/categories/categories.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  
public CategoriesARR:Categories[]=[]
  constructor(private categoriesSRV:CategoriesService){

  }
  ngOnInit(): void {
   this.gatAllCategory()
  }
  gatAllCategory(){
    this.categoriesSRV.getAllCategories().subscribe(suc=>{
      this.CategoriesARR=suc
    })
  }

  deleteCategory(id:number){
    this.categoriesSRV.deleteCategories(id).subscribe(suc=>{
      console.log(suc);
      
      this.gatAllCategory()
    })

  }

}
