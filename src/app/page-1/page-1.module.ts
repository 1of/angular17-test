import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page1RoutingModule } from './page-1-routing.module';
import { Page1Component } from './page-1.component';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    Page1Component
  ],
  imports: [
    CommonModule,
    Page1RoutingModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule
  ]
})
export class Page1Module { }
