import { TestBed } from '@angular/core/testing';

import { HoroscopoSService } from './horoscopo-s.service';

describe('HoroscopoSService', () => {
  let service: HoroscopoSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoroscopoSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
