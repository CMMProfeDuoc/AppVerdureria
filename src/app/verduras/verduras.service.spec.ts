import { TestBed } from '@angular/core/testing';

import { VerdurasService } from './verduras.service';

describe('VerdurasService', () => {
  let service: VerdurasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerdurasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
