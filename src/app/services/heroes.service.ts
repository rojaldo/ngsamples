import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private heroes: string[] = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  heroes$ = new BehaviorSubject<string[]>(this.heroes);

  constructor() { }

  addHero(newHeroName: string) {
    this.heroes.push(newHeroName);
    this.heroes$.next(this.heroes);
  }

  getHeroes(): string[] {
    return this.heroes;
  }
  
}
