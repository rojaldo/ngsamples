import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from 'src/model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  // heroes and description
  private heroes: Hero[] = [ new Hero('Superman', 'Man of Steel'), new Hero('Batman', 'Dark Knight')];

  heroes$ = new BehaviorSubject<Hero[]>(this.heroes);

  constructor() { }

  addHero(newHero: Hero) {
    this.heroes.push(newHero);
    this.heroes$.next(this.heroes);
  }

  getHeroes(): Hero[] {
    return this.heroes;
  }
  
}
