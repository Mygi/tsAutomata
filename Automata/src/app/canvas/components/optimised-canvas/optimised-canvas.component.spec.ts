import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OptimisedCanvasComponent } from './optimised-canvas.component';

describe('OptimisedCanvasComponent', () => {
  let component: OptimisedCanvasComponent;
  let fixture: ComponentFixture<OptimisedCanvasComponent>;

  beforeEach(waitForAsync(() => {
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
