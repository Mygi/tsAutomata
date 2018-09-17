import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NativeCheckerboardComponent } from './components/native-checkerboard/native-checkerboard.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  declarations: [NativeCheckerboardComponent],
  exports: [NativeCheckerboardComponent]
})
export class NativeElementModule { }
