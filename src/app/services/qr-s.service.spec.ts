import { TestBed } from '@angular/core/testing';

import { QrSService } from './qr-s.service';

describe('QrSService', () => {
  let service: QrSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QrSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
