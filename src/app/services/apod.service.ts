import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import * as moment from 'moment';

@Injectable()
export class ApodService {

  private APIKEY = 'tqz634Z1x0LiJzjbhSyUoExrZaGKLM0MG1VnROR6';
  private apod: any = {};
  apod$ = new BehaviorSubject<any>(this.apod);

  constructor(private http: HttpClient) { }

  getApod(date?: string): void {
    if (date && moment(date).isValid()) {
      this.doRequest(date);
    } else {
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
          this.apod$.next(this.apod);
        });
    } else {
      this.http.get(`https://api.nasa.gov/planetary/apod?api_key=${this.APIKEY}`).subscribe(
        data => {
          this.apod = data;
          this.apod$.next(this.apod);
          console.log(data);
        }, error => {
          console.log(error);
        }
      );
    }
  }
}
