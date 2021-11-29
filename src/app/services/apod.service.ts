import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import * as moment from 'moment';

@Injectable()
export class ApodService {

  private APIKEY = 'DEMO_KEY';
  private apod: any = {};
  private apodArray: any[] = []
  apodArray$ = new BehaviorSubject<any[]>(this.apodArray);
  apod$ = new BehaviorSubject<any>(this.apod);

  constructor(private http: HttpClient) { }

  getApod(date?: string): void {
    if (date && moment(date).isValid() && this.apodArray.filter(apod => apod.date === date).length === 0) {
      this.doRequest(date);
    } else if (!date) {
      const today = moment().format('YYYY-MM-DD');
      console.log('ApodService' + today);
      if (this.apod.date && this.apod.date === today) {
        this.apod$.next(this.apod);
      } else {
        this.doRequest();
      }

    }
  }

  private doRequest(date?: string): void {
    if (date) {
      this.http.get(`https://api.nasa.gov/planetary/apod?api_key=${this.APIKEY}&date=${date}`)
        .subscribe(data => {
          this.apod = data;
          this.apodArray.push(data);
          this.apodArray$.next(this.apodArray);
        });
    } else {
      this.http.get(`https://api.nasa.gov/planetary/apod?api_key=${this.APIKEY}`).subscribe(
        data => {
          this.apod = data;
          this.apodArray.push(data);
          this.apodArray$.next(this.apodArray);
          console.log(data);
        }, error => {
          console.log(error);
        }
      );
    }
  }
}
