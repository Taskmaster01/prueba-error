import { TestBed } from '@angular/core/testing';

import { PortalSService } from './portal-s.service';

describe('PortalSService', () => {
  let service: PortalSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortalSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
