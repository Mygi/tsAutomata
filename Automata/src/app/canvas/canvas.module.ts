import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasCheckerboardComponent } from './components/canvas-checkerboard/canvas-checkerboard.component';
import { MatButtonModule } from '@angular/material/button';
import { OptimisedCanvasComponent } from './components/optimised-canvas/optimised-canvas.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  declarations: [CanvasCheckerboardComponent, OptimisedCanvasComponent],
  exports: [CanvasCheckerboardComponent]
})
export class CanvasModule { }
