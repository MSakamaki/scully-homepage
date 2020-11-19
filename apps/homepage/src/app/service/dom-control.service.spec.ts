import { TestBed } from '@angular/core/testing';

import { DomControlService } from './dom-control.service';

describe('DomControlService', () => {
  let service: DomControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DomControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
