import { TestBed } from '@angular/core/testing';

import { StoreJsonService } from './store-json.service';

describe('StoreJsonService', () => {
  let service: StoreJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
