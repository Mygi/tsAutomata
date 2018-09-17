import { NativeElementModule } from './native-element.module';

describe('NativeElementModule', () => {
  let nativeElementModule: NativeElementModule;

  beforeEach(() => {
    nativeElementModule = new NativeElementModule();
  });

  it('should create an instance', () => {
    expect(nativeElementModule).toBeTruthy();
  });
});
