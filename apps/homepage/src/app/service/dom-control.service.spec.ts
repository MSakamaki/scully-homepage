import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';

import { DomControlService } from './dom-control.service';

describe('DomControlService', () => {
  let service: DomControlService;
  let mockScript;
  let mock;
  beforeEach(() => {
    mockScript = {
      onload: () => void 0,
      onerror: () => void 0,
    };
    mock = {
      createElement: jest.fn((src) => {
        mockScript.src = src;
        return mockScript;
      }),
      head: {
        appendChild: (dom) => {
          if (dom.src === 'ERR') {
            mockScript.onerror(new Error('CUSTOM ERROR'));
          } else {
            mockScript.onload();
          }
        },
      },
    };
    TestBed.configureTestingModule({
      providers: [
        {
          provide: DOCUMENT,
          useValue: mock,
        },
      ],
    });
    service = TestBed.inject(DomControlService);
  });
  it('should be created', async () => {
    expect(service).toBeTruthy();
    await service.addScript('OK');
  });
  it('should be error', async () => {
    await expect(service.addScript('ERR')).rejects.toThrow(
      new Error('CUSTOM ERROR')
    );
  });
});
