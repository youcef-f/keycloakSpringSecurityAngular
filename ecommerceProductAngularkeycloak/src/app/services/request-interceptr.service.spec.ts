import { TestBed } from '@angular/core/testing';

import { RequestInterceptrService } from './request-interceptr.service';

describe('RequestInterceptrService', () => {
  let service: RequestInterceptrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestInterceptrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
