import { TestBed } from '@angular/core/testing';

import { OutGuard } from './out.guard';

describe('OutGuard', () => {
  let guard: OutGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OutGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
