import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasCheckerboardComponent } from './canvas-checkerboard/canvas-checkerboard.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  declarations: [CanvasCheckerboardComponent],
  exports: [CanvasCheckerboardComponent]
})
export class CanvasModule { }
