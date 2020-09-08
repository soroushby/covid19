import { DataService } from './../services/data.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.scss'],
})
export class Covid19Component {
  covidData$ = this.ds.getCovidData();
  constructor(private ds: DataService) {}
}

// .subscribe((data) => console.log(data.data ));
