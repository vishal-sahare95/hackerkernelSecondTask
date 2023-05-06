import { TestBed } from '@angular/core/testing';

import { InGuard } from './in.guard';

describe('InGuard', () => {
  let guard: InGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
