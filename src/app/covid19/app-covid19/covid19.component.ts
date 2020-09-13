import { CovidData } from 'src/app/interfaces/covid-data';
import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.scss'],
})
export class Covid19Component {
  covidData$: Observable<CovidData[]> = this.ds.getCovidData();

  constructor(private ds: DataService) {}
}
