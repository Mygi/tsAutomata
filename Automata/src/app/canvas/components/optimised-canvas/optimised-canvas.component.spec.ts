import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimisedCanvasComponent } from './optimised-canvas.component';

describe('OptimisedCanvasComponent', () => {
  let component: OptimisedCanvasComponent;
  let fixture: ComponentFixture<OptimisedCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptimisedCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptimisedCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
