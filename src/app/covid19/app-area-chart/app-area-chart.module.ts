import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppAreaChartRoutingModule } from './app-area-chart-routing.module';
import { AppAreaChartComponent } from './app-area-chart.component';
import { AgChartsAngularModule } from 'ag-charts-angular';

@NgModule({
  declarations: [AppAreaChartComponent],
  imports: [CommonModule, AppAreaChartRoutingModule, AgChartsAngularModule],
})
export class AppAreaChartModule {}
