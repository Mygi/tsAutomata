import { TestBed, inject } from '@angular/core/testing';

import { MosaicConfigService } from './mosaic-config.service';

describe('MosaicConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MosaicConfigService]
    });
  });

  it('should be created', inject([MosaicConfigService], (service: MosaicConfigService) => {
    expect(service).toBeTruthy();
  }));
});
