import { SvgModule } from './svg.module';

describe('SvgModule', () => {
  let svgModule: SvgModule;

  beforeEach(() => {
    svgModule = new SvgModule();
  });

  it('should create an instance', () => {
    expect(svgModule).toBeTruthy();
  });
});
