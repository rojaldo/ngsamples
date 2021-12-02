import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from 'src/model/card';

@Component({
  selector: 'app-trivial-card',
  templateUrl: './trivial-card.component.html',
  styleUrls: ['./trivial-card.component.scss']
})
export class TrivialCardComponent implements OnInit {

  @Input() card: Card = new Card();
  @Output() onAnswerEvent = new EventEmitter<boolean>();

  classes: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.classes = [];
    for (const answer of this.card.answers) {
      this.classes.push('btn btn-primary btn-lg btn-block');
    }
  }

  onAnswer(answer: string) {
    this.card.responded = true;
    this.card.rightAnswered = (answer === this.card.correctAnswer);
    this.onAnswerEvent.emit(this.card.rightAnswered);
    this.card.userAnswer = answer;
    this.classes = [];
    for (const answer of this.card.answers) {
      this.classes.push(this.getClass(answer))
    }
  }

  getClass(answer: string): string {
    if (this.card.responded) {
      if (this.card.correctAnswer === answer) {
        return 'btn btn-success btn-lg btn-block';
      } else if (this.card.userAnswer === answer) {
        return 'btn btn-danger btn-lg btn-block';
      }
      return 'btn btn-secondary btn-lg btn-block';
    } else {
      return 'btn btn-primary btn-lg btn-block';
    }

  }

}
