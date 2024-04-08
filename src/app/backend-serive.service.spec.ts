import { TestBed } from '@angular/core/testing';

import { BackendSeriveService } from './backend-serive.service';

describe('BackendSeriveService', () => {
  let service: BackendSeriveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendSeriveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
