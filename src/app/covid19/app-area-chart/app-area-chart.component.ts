import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-app-area-chart',
  templateUrl: './app-area-chart.component.html',
  styleUrls: ['./app-area-chart.component.scss'],
})
export class AppAreaChartComponent {
  covidData$ = this.ds.getCovidData();

  constructor(private ds: DataService) {}
}
