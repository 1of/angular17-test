import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';

import { Page2RoutingModule } from './page-2-routing.module';
import { Page2Component } from './page-2.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {provideNativeDateAdapter} from "@angular/material/core";
@NgModule({
  declarations: [
    Page2Component
  ],
  imports: [
    CommonModule,
    Page2RoutingModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    DatePipe,
  ],
  providers: [provideNativeDateAdapter()],
})
export class Page2Module { }
