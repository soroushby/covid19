import { CovidData } from './../../interfaces/covid-data';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-app-area-chart',
  templateUrl: './app-area-chart.component.html',
  styleUrls: ['./app-area-chart.component.scss'],
})
export class AppAreaChartComponent implements OnInit {
  covidData: CovidData[] = [];
  cvd = [];

  public options: any;

  data = [
    {
      quarter: 'Q1',
      spending: 450,
    },
    {
      quarter: 'Q2',
      spending: 560,
    },
    {
      quarter: 'Q3',
      spending: 600,
    },
    {
      quarter: 'Q4',
      spending: 700,
    },
  ];
  constructor(private ds: DataService) {
    this.options = {
      data: this.data,
      series: [
        {
          xKey: 'quarter',
          yKey: 'spending',
        },
      ],
    };
  }

  ngOnInit(): void {
    this.ds.getCovidData().subscribe((x) =>
      x.forEach((el) => {
        return this.covidData.push(el);
      })
    );

    // for (let i = 0; i < 250; i++) {
    //   console.log(this.covidData[0]);
    // }

    console.log(this.covidData);
  }
}

// result.forEach(element => {
//   if (element._id === form.package) {
//       selectedPackage = element;
//   }
// });
