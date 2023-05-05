import { TestBed } from '@angular/core/testing';

import { OutGuardGuard } from './out-guard.guard';

describe('OutGuardGuard', () => {
  let guard: OutGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OutGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
