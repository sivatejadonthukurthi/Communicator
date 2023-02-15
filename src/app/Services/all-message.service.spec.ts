import { TestBed } from '@angular/core/testing';

import { AllMessageService } from './all-message.service';

describe('AllMessageService', () => {
  let service: AllMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
