import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CanvasAutomataComponent } from './canvas-automata.component';

describe('CanvasAutomataComponent', () => {
  let component: CanvasAutomataComponent;
  let fixture: ComponentFixture<CanvasAutomataComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasAutomataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasAutomataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
