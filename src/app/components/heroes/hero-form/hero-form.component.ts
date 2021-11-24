import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {

  @Output() onAddHero = new EventEmitter<string>();
  newHeroName = '';

  constructor() { }

  ngOnInit(): void {
  }

  addHero() {
    if (this.newHeroName.length > 0) {
      this.onAddHero.emit(this.newHeroName);
      this.newHeroName = '';
    }
  }

}
