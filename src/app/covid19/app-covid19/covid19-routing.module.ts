import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Covid19Component } from './covid19.component';

const routes: Routes = [
  { path: '', component: Covid19Component },
  {
    path: 'app-area-chart',
    loadChildren: () =>
      import('../app-area-chart/app-area-chart.module').then(
        (m) => m.AppAreaChartModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Covid19RoutingModule {}
