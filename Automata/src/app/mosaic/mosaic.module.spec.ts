import { MosaicModule } from './mosaic.module';

describe('MosaicModule', () => {
  let mosaicModule: MosaicModule;

  beforeEach(() => {
    mosaicModule = new MosaicModule();
  });

  it('should create an instance', () => {
    expect(mosaicModule).toBeTruthy();
  });
});
