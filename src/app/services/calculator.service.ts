import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

enum State {
  INIT,
  FIRST_FIGURE,
  SECOND_FIGURE,
  RESULT
}

@Injectable()
export class CalculatorService {

  private currentState = State.INIT;
  private firstFigure = 0;
  private secondFigure = 0;
  private operator = '';
  private result: number = 0;

  private display = '';
  public display$ = new BehaviorSubject<string>(this.display);

  constructor() { }

  private handleNumber(value: number) {

    switch (this.currentState) {
      case State.INIT:
        this.firstFigure = value;
        this.display += value.toString();
        this.display$.next(this.display);
        this.currentState = State.FIRST_FIGURE;
        break;
      case State.FIRST_FIGURE:
        this.firstFigure = this.firstFigure * 10 + value;
        this.display += value.toString();
        this.display$.next(this.display);
        break;
      case State.SECOND_FIGURE:
        this.secondFigure = this.secondFigure * 10 + value;
        this.display += value.toString();
        this.display$.next(this.display);
        break;
      case State.RESULT:
        this.firstFigure = value;
        this.secondFigure = 0;
        this.operator = '';
        this.result = 0;
        this.display = value.toString();
        this.display$.next(this.display);
        this.currentState = State.FIRST_FIGURE;
        break;
    }

  }

  private getResult(): number {
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

  private isOperator(value: string): boolean {
    return value === '+' || value === '-' || value === '*' || value === '/';
  }

  private clear() {
    this.firstFigure = 0;
    this.secondFigure = 0;
    this.operator = '';
    this.result = 0;
    this.display = '';
    this.display$.next(this.display);
    this.currentState = State.INIT;
  }

  private handleSymbol(value: string) {
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
          this.display$.next(this.display);
          this.currentState = State.SECOND_FIGURE;
        }
        break;
      case State.SECOND_FIGURE:
        if (value === '=') {
          this.result = this.getResult();
          this.display += value + this.result.toString();
          this.display$.next(this.display);
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
          this.display$.next(this.display);
          this.currentState = State.SECOND_FIGURE;
        }
        break;
    }

  }

  public process(myValue: string | number){
    if (typeof myValue === 'string') {
      this.handleSymbol(myValue);
    } else if (typeof myValue === 'number') {
      this.handleNumber(myValue);
    }
  }

}
