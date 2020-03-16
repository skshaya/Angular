import { TestBed } from '@angular/core/testing';

import { studentservice } from './student.service';

describe('studentservice', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: studentservice = TestBed.get(studentservice);
    expect(service).toBeTruthy();
  });
});
