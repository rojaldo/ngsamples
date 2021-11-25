import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApodService } from 'src/app/services/apod.service';

@Component({
  selector: 'app-apod-show',
  templateUrl: './apod-show.component.html',
  styleUrls: ['./apod-show.component.scss']
})
export class ApodShowComponent implements OnInit, OnChanges {

  @Input() date = '';
  apod: any = {};
  apiLoaded = false;

  constructor(private service: ApodService) { }

  ngOnInit(): void {
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
    this.service.apod$.subscribe(apod => {
      this.apod = apod;
    });
    this.service.getApod(this.date);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.date) {
      this.service.getApod(this.date);
    }
  }

  getVideoId(url: string): string | undefined {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    console.log(match);
    return (match && match[2].length === 11) ? match[2] : undefined;
  }

}
