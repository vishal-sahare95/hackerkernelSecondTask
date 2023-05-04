import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChipsModule } from 'primeng/chips';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
@NgModule({
  declarations: [
    AddComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    NgbModule,ChipsModule,
    TableModule,
    ButtonModule
  ],
  exports:[
    AddComponent
  ]
})
export class CategoriesModule { }
