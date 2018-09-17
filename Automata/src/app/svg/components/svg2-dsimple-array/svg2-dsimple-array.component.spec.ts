import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Svg2DSimpleArrayComponent } from './svg2-dsimple-array.component';

describe('Svg2DSimpleArrayComponent', () => {
  let component: Svg2DSimpleArrayComponent;
  let fixture: ComponentFixture<Svg2DSimpleArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Svg2DSimpleArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Svg2DSimpleArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
