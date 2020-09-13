import { CovidData } from 'src/app/interfaces/covid-data';
import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-covid19-histogram',
  templateUrl: './covid19-histogram.component.html',
  styleUrls: ['./covid19-histogram.component.scss'],
})
export class Covid19HistogramComponent implements OnChanges {
  @Input() covidData: CovidData[];

  searchText;
  margin = { top: 30, right: 30, bottom: 30, left: 30 };
  width = 960 - this.margin.right + this.margin.left;
  height = 500 - this.margin.top - this.margin.bottom;
  svg: any;

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'covidData':
            if (
              !this.svg &&
              !!this.covidData &&
              Array.isArray(this.covidData) &&
              this.covidData.length > 0
            ) {
              this.covid19Histogram();
            }
            break;
        }
      }
    }
  }

  covid19Histogram(): void {
    console.log('covidData :: ', this.covidData);

    this.svg = d3
      .select('div#mainChart')
      .append('svg')
      .attr('width', this.width + this.margin.right + this.margin.left)
      .append('g')
      .attr('transform', `translate(${this.margin.left},${this.margin.top})`);

    const x = d3.scaleBand().range([0, this.width]).padding(0.1);

    const y = d3.scaleLinear().range([this.height, 0]);

    x.domain(this.covidData.map((d) => d.name));

    y.domain(this.covidData.map((d) => d.today.deaths));

    this.svg.append('g').call(d3.axisLeft(y));
  }
}
