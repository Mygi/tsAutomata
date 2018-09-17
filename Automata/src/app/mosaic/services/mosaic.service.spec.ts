import { TestBed, inject } from '@angular/core/testing';

import { MosaicService } from './mosaic.service';

describe('MosaicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MosaicService]
    });
  });

  it('should be created', inject([MosaicService], (service: MosaicService) => {
    expect(service).toBeTruthy();
  }));
});
