import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgCheckerboardComponent } from './components/svg-checkerboard/svg-checkerboard.component';
import { SvgTsCheckerboardComponent } from './components/svg-ts-checkerboard/svg-ts-checkerboard.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  declarations: [SvgCheckerboardComponent, SvgTsCheckerboardComponent],
  exports: [SvgCheckerboardComponent, SvgTsCheckerboardComponent]
})
export class SvgModule { }
