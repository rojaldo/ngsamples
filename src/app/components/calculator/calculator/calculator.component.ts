import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';



@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  display = '';

  constructor(private service: CalculatorService) { }

  ngOnInit(): void {
  }

  onClick(myValue: string | number) {
    this.display = this.service.process(myValue);
  }


}
