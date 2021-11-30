import { TestBed } from '@angular/core/testing';

import { ApodService } from './apod.service';

xdescribe('ApodService', () => {
  let service: ApodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
