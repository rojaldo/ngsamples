import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Hero } from 'src/model/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private service: HeroesService) { 
  }

  ngOnInit(): void {
    this.service.heroes$.subscribe(heroes => this.heroes = heroes);

  }

  addHero(newHero: Hero) {
    this.service.addHero(newHero);
  }

}
