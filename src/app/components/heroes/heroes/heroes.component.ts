import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: string[] = [];

  constructor(private service: HeroesService) { 
  }

  ngOnInit(): void {
    this.heroes = this.service.getHeroes();

  }

  addHero(newHeroName: string) {
    this.heroes = this.service.addHero(newHeroName);
  }

}
