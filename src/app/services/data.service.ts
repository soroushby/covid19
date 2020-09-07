import { CovidData } from './../interfaces/covid-data';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getCovidData(): Observable<CovidData[]> {
    return this.http
      .get(' https://corona-api.com/countries')
      .pipe(map((ref) => Object.values(ref['data'])));
  }
}
