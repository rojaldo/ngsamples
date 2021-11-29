import { Component, OnInit } from '@angular/core';
import { ApodService } from 'src/app/services/apod.service';
import * as moment from 'moment';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  selectedDate = '';
  apodArray: any[] = [];

  constructor(private service: ApodService) { }

  ngOnInit(): void {
    this.service.apodArray$.subscribe(
      apods => { this.apodArray = apods });
  }

  dateChanged(date: any) {
    console.log('ApodComponent: ' + date.year + '-' + date.month + '-' + date.day);
    this.selectedDate = date.year + '-' + date.month + '-' + date.day;
    this.service.getApod(this.selectedDate);
  }



}
