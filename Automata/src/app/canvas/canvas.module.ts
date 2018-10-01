import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasCheckerboardComponent } from './components/canvas-checkerboard/canvas-checkerboard.component';
import { MatButtonModule } from '@angular/material/button';
import { OptimisedCanvasComponent } from './components/optimised-canvas/optimised-canvas.component';
import { CanvasAutomataComponent } from './components/canvas-automata/canvas-automata.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  declarations: [CanvasCheckerboardComponent, OptimisedCanvasComponent, CanvasAutomataComponent],
  exports: [CanvasCheckerboardComponent, CanvasAutomataComponent]
})
export class CanvasModule { }
