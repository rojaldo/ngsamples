import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeersComponent } from './beers.component';

xdescribe('BeersComponent', () => {
  let component: BeersComponent;
  let fixture: ComponentFixture<BeersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
