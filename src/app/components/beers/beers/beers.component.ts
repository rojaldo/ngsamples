import { Component, OnInit } from '@angular/core';
import { BeersService } from 'src/app/services/beers.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {

  beers: any[] = [];

  constructor(private service: BeersService) { }

  ngOnInit(): void {
    this.service.beers$.subscribe(data => {
      this.beers = data;
    });
    this.service.getBeers();
  }

}
