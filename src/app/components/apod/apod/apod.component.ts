import { Component, OnInit } from '@angular/core';
import { ApodService } from 'src/app/services/apod.service';
import * as moment from 'moment';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  apod: any = {};
  // today date in format {year:YYYY, month:MM, day:DD}
  date = this.getDate();
  apiLoaded = false;

  constructor(private service: ApodService) { }

  ngOnInit(): void {
    console.log(this.date);
    if (!this.apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
    this.service.apod$.subscribe(apod => {
      this.apod = apod;
    });
    this.service.getApod();
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
    this.service.getApod(this.date.year + '-' + this.date.month + '-' + this.date.day);
    
  }

  getVideoId(url: string): string | undefined {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    console.log(match);
    return (match && match[2].length === 11) ? match[2] : undefined;
  }

}
