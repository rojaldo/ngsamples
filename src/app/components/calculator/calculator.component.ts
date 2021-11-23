import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  display = '';

  constructor() { }

  ngOnInit(): void {
  }

  onClick(value: string | number) {
    if (typeof value === 'string') {
      this.display += value;
    } else if (typeof value === 'number') {
      this.display += value.toString();
    }
  }


}
