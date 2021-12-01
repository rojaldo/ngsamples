import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroesService } from 'src/app/services/heroes.service';
import { Hero } from 'src/model/hero';

import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let service: HeroesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroesComponent],
      providers: [HeroesService],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(HeroesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    component.addHero({} as Hero);
    expect(component.heroes.length).toBeFalse();
  });

});