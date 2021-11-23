import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: string[] = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  newHeroName = '';

  constructor() { }

  ngOnInit(): void {
  }

  addHero() {
    this.heroes.push(this.newHeroName);
    this.newHeroName = '';
  }

}
