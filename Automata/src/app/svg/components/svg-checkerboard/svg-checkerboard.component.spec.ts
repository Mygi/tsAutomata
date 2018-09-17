import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgCheckerboardComponent } from './svg-checkerboard.component';

describe('SvgCheckerboardComponent', () => {
  let component: SvgCheckerboardComponent;
  let fixture: ComponentFixture<SvgCheckerboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgCheckerboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgCheckerboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
