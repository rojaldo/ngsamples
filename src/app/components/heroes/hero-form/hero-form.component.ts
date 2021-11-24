import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Hero } from 'src/model/hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {

  @Output() onAddHero = new EventEmitter<Hero>();

  modelForm = {
    name: '',
    description: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  addHero() {
    if (this.modelForm.name.length > 0) {

      this.onAddHero.emit(new Hero(this.modelForm.name, this.modelForm.description));
      this.modelForm = {
        name: '',
        description: ''
      }
    }
  }

}
