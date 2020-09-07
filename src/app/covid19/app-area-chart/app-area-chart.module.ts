import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppAreaChartRoutingModule } from './app-area-chart-routing.module';
import { AppAreaChartComponent } from './app-area-chart.component';
import { AgChartsAngularModule } from 'ag-charts-angular';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [AppAreaChartComponent],
  imports: [
    CommonModule,
    AppAreaChartRoutingModule,
    AgChartsAngularModule,
    MaterialModule,
    FlexLayoutModule,
  ],
})
export class AppAreaChartModule {}
