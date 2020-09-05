import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Covid19RoutingModule } from './covid19-routing.module';
import { Covid19Component } from './covid19.component';


@NgModule({
  declarations: [Covid19Component],
  imports: [
    CommonModule,
    Covid19RoutingModule
  ]
})
export class Covid19Module { }
