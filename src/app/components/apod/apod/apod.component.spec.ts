import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApodService } from 'src/app/services/apod.service';

import { ApodComponent } from './apod.component';

xdescribe('ApodComponent', () => {
  let component: ApodComponent;
  let fixture: ComponentFixture<ApodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApodComponent ],
      providers: [ApodService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
