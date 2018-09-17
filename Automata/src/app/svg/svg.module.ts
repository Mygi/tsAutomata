import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgCheckerboardComponent } from './components/svg-checkerboard/svg-checkerboard.component';
import { SvgTsCheckerboardComponent } from './components/svg-ts-checkerboard/svg-ts-checkerboard.component';
import { MatButtonModule } from '@angular/material/button';
import { Svg2DSimpleArrayComponent } from './components/svg2-dsimple-array/svg2-dsimple-array.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  declarations: [SvgCheckerboardComponent, SvgTsCheckerboardComponent, Svg2DSimpleArrayComponent],
  exports: [SvgCheckerboardComponent, SvgTsCheckerboardComponent, Svg2DSimpleArrayComponent]
})
export class SvgModule { }
