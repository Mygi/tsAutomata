import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AutomataComponent } from '../../../contracts/automata-component';
import { AutomataBuilder } from '../../../contracts/automata-builder';
import { MosaicConfigService } from '../../../mosaic/services/mosaic-config.service';
import { SvgTsCheckerboardComponent } from '../svg-ts-checkerboard/svg-ts-checkerboard.component';

@Component({
  selector: 'app-svg2-dsimple-array',
  templateUrl: './svg2-dsimple-array.component.html',
  styleUrls: ['./svg2-dsimple-array.component.css']
})
export class Svg2DSimpleArrayComponent extends SvgTsCheckerboardComponent {

  /**
 * Div for appending the svg
 */
  @ViewChild('mySvg') svg;


  public drawSvg() {
    const div = this.svg.nativeElement;
    Array.from(div.children).forEach(child => {
      this._renderer.removeChild(div, child);
    });
    const svg = this._renderer.createElement('svg', 'svg');
    this._renderer.setAttribute(svg, 'height', this.numRows * this.columnHeight + '');
    this._renderer.setAttribute(svg, 'width', this.numColumns * this.columnWidth + '');

    this._renderer.appendChild(div, svg);
    this._renderer.listen(svg, 'click', (event) => {
      event.srcElement.style.fill = this.color;
    });

    const output: string[][] = [];
    for (let j = 0; j < this.numRows; j++) {
      output[j] = [];
      for (let i = 0; i < this.numColumns; i++) {
        // create Column
        this._renderer.appendChild(svg, this.createSvgRectangle(i * this.columnWidth, j * this.columnHeight,
          this.columnWidth, this.columnHeight, (i % 2 === j % 2) ? this.offColor : this.onColor));
      }
    }

  }

}
