import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgTsCheckerboardComponent } from './svg-ts-checkerboard.component';

describe('SvgTsCheckerboardComponent', () => {
  let component: SvgTsCheckerboardComponent;
  let fixture: ComponentFixture<SvgTsCheckerboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgTsCheckerboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgTsCheckerboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
