import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';

import {ProgressBarModule} from 'primeng/progressbar';

import {MultiSelectModule} from 'primeng/multiselect';

import {DropdownModule} from 'primeng/dropdown';

import {SliderModule} from 'primeng/slider';

import {ButtonModule} from 'primeng/button';
@NgModule({
  declarations: [
    AddComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    TableModule,
    ProgressBarModule,
    MultiSelectModule,
    DropdownModule,
    SliderModule,
    ButtonModule,
    FormsModule
  ]
})
export class ProductsModule { }
