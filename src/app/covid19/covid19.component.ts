import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.scss'],
})
export class Covid19Component implements OnInit {
  covidData$: Observable<any>;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.covidData$ = this.dataService.getCovidData();
  }
}

// .subscribe((data) => console.log(data.data ));
