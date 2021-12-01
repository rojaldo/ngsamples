import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observer } from 'rxjs';
import { Beer } from 'src/model/beer';

@Injectable()
export class BeersService {

  private beers: Beer[] = [];
  beers$ = new BehaviorSubject<any>(this.beers);

  constructor(private http: HttpClient) { }

  getBeers(): void {
    const observer: Observer<any> = {
      next: (beers: any[]) => {
        let tmp = beers;
        tmp.forEach((element: any) => {
          this.beers.push(new Beer(element.name, element.tagline, element.description, element.abv, element.image_url));
        });
        this.beers$.next(this.beers);
        console.log(tmp);
      }, 
      error: error => {
        console.log(error);
      }, 
      complete: () => {
        console.log('completed');
      }
    };

    this.http.get<any[]>('https://api.punkapi.com/v2/beers').subscribe(observer);
  }

}
