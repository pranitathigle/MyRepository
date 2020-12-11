import { TestBed } from '@angular/core/testing';

import { RADUILibraryService } from './radui-library.service';

describe('RADUILibraryService', () => {
  let service: RADUILibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RADUILibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
