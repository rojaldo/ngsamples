import { Component, OnInit } from '@angular/core';
import { TrivialService } from 'src/app/services/trivial.service';
import { Card } from 'src/model/card';

@Component({
  selector: 'app-trivial',
  templateUrl: './trivial.component.html',
  styleUrls: ['./trivial.component.scss']
})
export class TrivialComponent implements OnInit {

  cards: Card[] = [];
  score = 0;

  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;

  constructor(private service: TrivialService) { }

  ngOnInit(): void {
    this.service.cards$.subscribe(cards => {
      this.cards = cards;
      console.log(cards);
    });
    this.service.getCards();
  }

  handleResult(rightAnswer: boolean) {
    if (rightAnswer) {
      this.score += 2;
    } else {
      this.score -= 1;
    }
  }

  onScrollDown() {
    this.service.getCards();
  }

}
