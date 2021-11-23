import { Component, OnInit } from '@angular/core';

enum State {
  INIT,
  FIRST_FIGURE,
  SECOND_FIGURE,
  RESULT
}

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  display = '';

  currentState = State.INIT;
  firstFigure = 0;
  secondFigure = 0;
  operator = '';
  result: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  handleNumber(value: number) {

    switch (this.currentState) {
      case State.INIT:
        this.firstFigure = value;
        this.display += value.toString();
        this.currentState = State.FIRST_FIGURE;
        break;
      case State.FIRST_FIGURE:
        this.firstFigure = this.firstFigure * 10 + value;
        this.display += value.toString();
        break;
      case State.SECOND_FIGURE:
        this.secondFigure = this.secondFigure * 10 + value;
        this.display += value.toString();
        break;
      case State.RESULT:
        this.firstFigure = value;
        this.secondFigure = 0;
        this.operator = '';
        this.result = 0;
        this.display = value.toString();
        this.currentState = State.FIRST_FIGURE;
        break;
    }

  }

  getResult(): number {
    switch (this.operator) {
      case '+':
        return this.firstFigure + this.secondFigure;
      case '-':
        return this.firstFigure - this.secondFigure;
      case '*':
        return this.firstFigure * this.secondFigure;
      case '/':
        return this.firstFigure / this.secondFigure;
      default:
        break;
    }
    return 0;
  }

  isOperator(value: string): boolean {
    return value === '+' || value === '-' || value === '*' || value === '/';
  }

  clear() {
    this.firstFigure = 0;
    this.secondFigure = 0;
    this.operator = '';
    this.result = 0;
    this.display = '';
    this.currentState = State.INIT;
  }

  handleSymbol(value: string) {
    if (value === 'c') {
      this.clear();
    }
    switch (this.currentState) {
      case State.INIT:
        break;
      case State.FIRST_FIGURE:
        if (this.isOperator(value)) {
          this.operator = value;
          this.display += value;
          this.currentState = State.SECOND_FIGURE;
        }
        break;
      case State.SECOND_FIGURE:
        if (value === '=') {
          this.result = this.getResult();
          this.display += value + this.result.toString();
          this.currentState = State.RESULT;
        }
        break;
      case State.RESULT:
        if (this.isOperator(value)) {
          this.firstFigure = this.result;
          this.operator = value;
          this.secondFigure = 0;
          this.result = 0;
          this.display = this.firstFigure.toString() + value;
          this.currentState = State.SECOND_FIGURE;
        }
        break;
    }

  }

  onClick(value: string | number) {
    if (typeof value === 'string') {
      this.handleSymbol(value);
    } else if (typeof value === 'number') {
      this.handleNumber(value);
    }
  }


}
