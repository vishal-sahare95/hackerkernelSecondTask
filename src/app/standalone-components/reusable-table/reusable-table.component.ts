import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reusable-table',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, FormsModule],
  templateUrl: './reusable-table.component.html',
  styleUrls: ['./reusable-table.component.css']
})
export class ReusableTableComponent implements OnInit {
  @Input() allheaderList: any[] = [];
  @Input() headerList: any[] = [];
  @Input() bodyList: any[] = [];
  @Output() onEdit = new EventEmitter()
  @Output() ondelete = new EventEmitter()
  @Output() Onlist = new EventEmitter()
  @Output() OnstartList = new EventEmitter()
  @Output() OnPage = new EventEmitter()

  @Input()isvisiblePagination?:boolean=true//for hide show pagination
  startlist: number = 0
  list: number = 10
  page: number = 1
  pageCounter:any=2
  //  @Input() isAction:boolean=false;
  ngOnInit(): void {
    this.selectedList(this.list)
  }
  edit(it: any) {

    this.onEdit.emit(it)
  }
  delete(item: number) {

    console.log(item);

    this.ondelete.emit(item)
  }

  selectedList(num: number) {
    console.log(num);
    this.Onlist.emit(num)
this.pageValue(1)
  }

  decrement() {
    if (this.page > 1) {
      this.page = this.page - 1
      this.pageValue(this.page)
    } 
  }

  increment() {
    if (this.pageCounter !==this.page) {
      this.page = this.page + 1
      this.pageValue(this.page)
    }
  }

  pageValue(no: number) {
    this.startlist = (no * this.list) - this.list + 1
    this.page = no
    console.log(this.page);
    console.log( Math.ceil((this.allheaderList.length/this.list)));
   this.pageCounter= Math.ceil((this.allheaderList.length/this.list))
    this.OnstartList.emit(this.startlist)
    
  }


}
