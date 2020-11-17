import { TestBed } from '@angular/core/testing';

import { ExternalResourceService } from './external-resource.service';

describe('ExternalResourceService', () => {
  let service: ExternalResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExternalResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
