import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-apod-picker',
  templateUrl: './apod-picker.component.html',
  styleUrls: ['./apod-picker.component.scss']
})
export class ApodPickerComponent implements OnInit {

  @Output() onDateChange = new EventEmitter<any>();
  date = this.getDate();

  constructor() { }

  ngOnInit(): void {
  }

  getDate(){
    const today = moment().format('YYYY-MM-DD');
    const date = moment(today).toObject();
    return {
      year: date.years,
      month: date.months + 1,
      day: date.date
    };
  }

  dateSelect() {
    console.log(this.date);
    this.onDateChange.emit(this.date);
    
  }


}
