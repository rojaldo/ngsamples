import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observer } from 'rxjs';
import { Card } from 'src/model/card';

@Injectable({
  providedIn: 'root'
})
export class TrivialService {

  private cards: Card[] = [];
  cards$ = new BehaviorSubject<Card[]>([]);

  constructor(private http: HttpClient) { }

  getCards(): void {
    const observer: Observer<any> = {
      next: (data: any) => {
        console.log(data);
        for (const iterator of data.results) {
          this.cards.push(new Card(iterator));
          console.log(iterator.toString());
          
        }
        this.cards$.next(this.cards);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('completed');
      }
    }

    this.http.get('https://opentdb.com/api.php?amount=10').subscribe(observer);
  }
}
