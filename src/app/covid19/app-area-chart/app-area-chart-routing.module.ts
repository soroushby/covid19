import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppAreaChartComponent } from './app-area-chart.component';

const routes: Routes = [{ path: '', component: AppAreaChartComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppAreaChartRoutingModule { }
