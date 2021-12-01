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

  constructor(private service: TrivialService) { }

  ngOnInit(): void {
    this.service.cards$.subscribe(cards => {
      this.cards = cards;
      console.log(cards);
    });
    this.service.getCards();
  }

}
