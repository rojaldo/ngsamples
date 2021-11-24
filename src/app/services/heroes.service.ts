import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private heroes: string[] = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  constructor() { }

  addHero(newHeroName: string): string[] {
    this.heroes.push(newHeroName);
    return this.heroes;
  }

  getHeroes(): string[] {
    return this.heroes;
  }
  
}
