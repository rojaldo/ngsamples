import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/model/card';

@Component({
  selector: 'app-trivial-card',
  templateUrl: './trivial-card.component.html',
  styleUrls: ['./trivial-card.component.scss']
})
export class TrivialCardComponent implements OnInit {

  @Input() card: Card = new Card();
  constructor() { }

  ngOnInit(): void {
  }

}
