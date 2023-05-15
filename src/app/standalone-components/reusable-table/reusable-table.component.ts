import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-reusable-table',
  standalone: true,
  imports: [CommonModule,NgOptimizedImage],
  templateUrl: './reusable-table.component.html',
  styleUrls: ['./reusable-table.component.css']
})
export class ReusableTableComponent {
 @Input() headerList:any[]=[];
 @Input() bodyList:any[]=[];
 @Output()  onEdit=new EventEmitter()
 @Output()  ondelete=new EventEmitter()
//  @Input() isAction:boolean=false;
 
edit(it:any){
  
 this.onEdit.emit(it)
}
delete(item:number){
  
  console.log(item);
  
  this.ondelete.emit(item)
}

}
