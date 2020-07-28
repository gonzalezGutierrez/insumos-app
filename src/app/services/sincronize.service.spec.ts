import { TestBed } from '@angular/core/testing';

import { SincronizeService } from './sincronize.service';

describe('SincronizeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SincronizeService = TestBed.get(SincronizeService);
    expect(service).toBeTruthy();
  });
});
