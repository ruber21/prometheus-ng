import { TestBed } from '@angular/core/testing';

import { PngComponentService } from './png-component.service';

describe('PngComponentService', () => {
  let service: PngComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PngComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
