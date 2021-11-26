import { Options } from '@angular-slider/ngx-slider/options';
import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, map, Observable, OperatorFunction } from 'rxjs';
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

  public model: any;

  searchString = '';
  minValue: number = 4;
  maxValue: number = 5;

  options: Options = {
    floor: 0,
    ceil: 60,
    step: 0.1,
  };

  states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
    'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
    'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
    'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
    'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
    'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

  constructor(private service: BeersService) { }

  ngOnInit(): void {
    this.service.beers$.subscribe(data => {
      this.beers = data;
      this.filterArray();
    });
    this.service.getBeers();
  }

  filterArray(): Beer[] {
    if (this.searchString.length > 0) {
      this.filteredBeers = this.beers.filter(beer => beer.getName().toLowerCase().startsWith(this.searchString.toLowerCase()));
    } else {
      this.filteredBeers = this.beers;
    }
    return this.filteredBeers = this.filteredBeers.
      filter(beer => beer.getAbv() >= this.minValue && beer.getAbv() <= this.maxValue).
      sort((a, b) => a.getAbv() - b.getAbv());

  }

  valueChange(): void {
    this.filterArray();
  }

  handleFilter(value: string): void {
    this.searchString = value;
    this.filterArray();
  }

  getFilteredBeersStringArray(): string[] {
    return this.filteredBeers.map(beer => beer.getName());
  }


  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) => {
    text$.subscribe(text => {
      this.searchString = text;
      this.filterArray();
    });
    return text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.getFilteredBeersStringArray().filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )
  }

}
