import { MaterialModule } from './../../modules/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Covid19RoutingModule } from './covid19-routing.module';
import { Covid19Component } from './covid19.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Covid19HistogramComponent } from './covid19-histogram.component/covid19-histogram.component';

@NgModule({
  declarations: [Covid19Component, Covid19HistogramComponent],
  imports: [
    CommonModule,
    Covid19RoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    Ng2SearchPipeModule,
  ],
})
export class Covid19Module {}
