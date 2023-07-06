import { TestBed } from '@angular/core/testing';

import { ConbertirService } from './conbertir.service';

describe('ConbertirService', () => {
  let service: ConbertirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConbertirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
