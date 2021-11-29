import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/model/hero';
import { HeroForm } from 'src/model/heroform';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new HeroForm();

  submitted = false;

  namePattern = '^[a-zA-Z]*$';

  // regex to check two words 
  alterEgoPattern = '^[a-zA-Z]* [a-zA-Z][a-zA-Z]*$';

  onSubmit(form: any) {
    console.log(this.model);
    this.submitted = true;
    form.reset();
  }

  newHero() {
    this.model = new HeroForm();
  }

  getNameErrorMessage(): string {
    if (this.model.name) {
      if (this.model.name.length === 0) return 'Name is required';
      // string matches regex
      if (!this.model.name.match(this.namePattern)) return 'Name should only have letters';
    }
    return '';
  }
}
