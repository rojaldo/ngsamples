import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Beer } from 'src/model/beer';

@Injectable()
export class BeersService {

  private beers: Beer[] = [];
  beers$ = new BehaviorSubject<any>(this.beers);

  constructor(private http: HttpClient) { }

  getBeers(): void {
    this.http.get<any[]>('https://api.punkapi.com/v2/beers').subscribe(
      data => {
        let tmp = data;
        tmp.forEach(element => {
          this.beers.push(new Beer(element.name, element.tagline, element.description, element.abv, element.image_url));
        });
        this.beers$.next(this.beers);
        console.log(data);
      }, error => {
        console.log(error);
      }
    );
  }

}
