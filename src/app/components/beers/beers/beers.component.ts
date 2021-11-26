import { Options } from '@angular-slider/ngx-slider/options';
import { Component, OnInit } from '@angular/core';
import { BeersService } from 'src/app/services/beers.service';
import { Beer } from 'src/model/beer';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {

  beers: Beer[] = [];
  filteredBeers: Beer[] = [];

  minValue: number = 4;
  maxValue: number = 5;
  options: Options = {
    floor: 0,
    ceil: 60,
    step: 0.1,
  };

  constructor(private service: BeersService) { }

  ngOnInit(): void {
    this.service.beers$.subscribe(data => {
      this.beers = data;
      this.filteredBeers = this.beers.
        filter(beer => beer.getAbv() >= this.minValue && beer.getAbv() <= this.maxValue).
        sort((a, b) => a.getAbv() - b.getAbv());
    });
    this.service.getBeers();
  }

  valueChange(): void {
    this.filteredBeers = this.beers.
      filter(beer => beer.getAbv() >= this.minValue && beer.getAbv() <= this.maxValue).
      sort((a, b) => a.getAbv() - b.getAbv());
  }

}
