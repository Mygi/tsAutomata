import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasCheckerboardComponent } from './canvas-checkerboard.component';

describe('CanvasCheckerboardComponent', () => {
  let component: CanvasCheckerboardComponent;
  let fixture: ComponentFixture<CanvasCheckerboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasCheckerboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasCheckerboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
