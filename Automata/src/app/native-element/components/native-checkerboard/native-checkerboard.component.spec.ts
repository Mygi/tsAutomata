import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NativeCheckerboardComponent } from './native-checkerboard.component';

describe('NativeCheckerboardComponent', () => {
  let component: NativeCheckerboardComponent;
  let fixture: ComponentFixture<NativeCheckerboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NativeCheckerboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NativeCheckerboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
