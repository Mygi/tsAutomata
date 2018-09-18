import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AutomataComponent } from '../../../contracts/automata-component';
import { AutomataBuilder } from '../../../contracts/automata-builder';
import { MosaicConfigService } from '../../../mosaic/services/mosaic-config.service';

@Component({
  selector: 'app-svg-ts-checkerboard',
  templateUrl: './svg-ts-checkerboard.component.html',
  styleUrls: ['./svg-ts-checkerboard.component.css']
})
export class SvgTsCheckerboardComponent extends AutomataComponent implements OnInit {
  /**
   * Div for appending the svg
   */
  @ViewChild('mySvg') svg;

  constructor(protected _mosaicService: AutomataBuilder, protected _configService: MosaicConfigService, protected _renderer: Renderer2) {
    super(_mosaicService);
    this.offColor = '#470403';
  }

  ngOnInit(): void {
    this._configService.getConfig().subscribe(config => {
      this.processConfig(config);
      this.offColor = config.paintColour;
    });
  }
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
    this.drawMosaic();

    this.mosaic.nodes.forEach(row => row.forEach(node => {
      this._renderer.appendChild(svg,
        this.createSvgRectangle(node.tileColumnId * this.columnWidth, node.tileRowId * this.columnHeight,
          this.columnWidth, this.columnHeight, node.colour));
    }));
    console.log(div);

  }

  protected createSvgRectangle(x: number, y: number, width: number, height: number, color: string): any {
    const child = this._renderer.createElement('rect', 'svg');
    this._renderer.setAttribute(child, 'style', 'width:' + width + 'px; height: ' + height + 'px; fill: ' + color + ';');
    this._renderer.setAttribute(child, 'class', 'column');
    this._renderer.setAttribute(child, 'x', x.toString());
    this._renderer.setAttribute(child, 'y', y.toString());

    return child;
  }

}
