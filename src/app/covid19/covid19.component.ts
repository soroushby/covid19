import { CovidData } from 'src/app/interfaces/covid-data';
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as d3 from 'd3';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.scss'],
})
export class Covid19Component implements OnInit {
  searchText;
  covidData$ = this.ds.getCovidData();
  margin = { top: 30, right: 30, bottom: 30, left: 30 };
  width = 960 - this.margin.right + this.margin.left;
  height = 500 - this.margin.top - this.margin.bottom;
  constructor(private ds: DataService) {}
  ngOnInit() {
    let svg = d3
      .select('div#mainChart')
      .append('svg')
      .attr('width', this.width + this.margin.right + this.margin.left)
      .append('g')
      .attr('transform', `translate(${this.margin.left},${this.margin.top})`);

    let x = d3.scaleBand().range([0, this.width]).padding(0.1);

    let y = d3.scaleLinear().range([this.height, 0]);

    d3.json('https://corona-api.com/countries')

      .then((results: any) => {
        results = results.data;

        x.domain(results.map((d) => d.name));

        y.domain(results.map((d) => d.today.deaths));

        svg.append('g').call(d3.axisLeft(y));

        console.log(results);
      })
      .catch((err) => {
        throw err;
      });
  }
}

// .subscribe((data) => console.log(data.data ));
