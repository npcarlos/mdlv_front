import { TestBed } from '@angular/core/testing';

import { PrelotRequestService } from './prelot-request.service';

describe('PrelotRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrelotRequestService = TestBed.get(PrelotRequestService);
    expect(service).toBeTruthy();
  });
});
