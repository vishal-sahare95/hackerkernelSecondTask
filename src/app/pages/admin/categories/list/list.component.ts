import { Component,OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Categories } from 'src/app/config/login/admin/categories/categories';
import { CategoriesService } from 'src/app/config/login/admin/categories/categories.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  
public CategoriesARR:Categories[]=[]
  constructor(private categoriesSRV:CategoriesService,private toastr: ToastrService){

  }
  ngOnInit(): void {
   this.gatAllCategory()
  }

  gatAllCategory(){
    this.categoriesSRV.getAllCategories().subscribe(suc=>{

      this.CategoriesARR=suc
    },
    (error)=>{
  this.toastr.error('Something wrong', 'Sorry');
    }
    )
  }

  deleteCategory(id:number){
    this.categoriesSRV.deleteCategories(id).subscribe(suc=>{
      console.log(suc);
      
      this.toastr.success('Data delete successfully', 'Done');
      
      this.gatAllCategory()
    },
    (error)=>{
      this.toastr.success('Something wrong', 'Sorry');
    }
    )

  }

}

