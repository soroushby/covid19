import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getCovidData() {
    return this.http
      .get(' https://corona-api.com/countries')
      .pipe(map((ref: any) => ref.data));
  }
}
