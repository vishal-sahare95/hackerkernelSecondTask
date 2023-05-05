import { TestBed } from '@angular/core/testing';

import { InGuardGuard } from './in-guard.guard';

describe('InGuardGuard', () => {
  let guard: InGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
