import { TestBed } from '@angular/core/testing';

import { GeneralFetcherService } from './general-fetcher.service';

describe('GeneralFetcherService', () => {
  let service: GeneralFetcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralFetcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
