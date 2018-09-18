import { Component, OnInit, ViewChild } from '@angular/core';
import { AutomataComponent } from '../../../contracts/automata-component';
import { AutomataBuilder } from '../../../contracts/automata-builder';
import { MosaicConfigService } from '../../../mosaic/services/mosaic-config.service';

@Component({
  selector: 'app-optimised-canvas',
  templateUrl: './optimised-canvas.component.html',
  styleUrls: ['./optimised-canvas.component.css']
})
export class OptimisedCanvasComponent extends AutomataComponent implements OnInit {

  context: CanvasRenderingContext2D;
  @ViewChild('myCanvas') myCanvas;

  constructor(protected _mosaicService: AutomataBuilder, protected _configService: MosaicConfigService) {
    super(_mosaicService);
    this.offColor = '#05167F';
  }

  ngOnInit(): void {
    this._configService.getConfig().subscribe(config => {
      this.processConfig(config);
      this.offColor = config.paintColour;
    });
  }

  drawCanvas(): void {
    const canvas = this.myCanvas.nativeElement;
    this.context = canvas.getContext('2d');

    const ctx = this.context;
    ctx.clearRect(0, 0, this.columnWidth * this.numColumns, this.columnHeight * this.numRows);
    this.mosaic.nodes.forEach(
      row => row.forEach(column => {
        ctx.fillStyle = column.colour;
        ctx.fillRect(column.tileColumnId * this.columnWidth, column.tileRowId * this.columnHeight, this.columnWidth, this.columnHeight);
      })
    );

    for (let j = 0; j < this.numRows; j++) {
      for (let i = 0; i < this.numColumns; i++) {
        // create Column
        ctx.fillStyle = (i % 2 === j % 2) ? this.offColor : this.onColor;
        ctx.fillRect(i * this.columnWidth, j * this.columnHeight,
          this.columnWidth, this.columnHeight);
      }
    }
  }

  updateCanvas(x, y) {
    const canvas = this.myCanvas.nativeElement;
    this.context = canvas.getContext('2d');

    const ctx = this.context;
    ctx.fillStyle = this.color;

    const tmpX = Math.floor(x / this.columnWidth);
    const tmpY = Math.floor(y / this.columnHeight);
    ctx.fillRect(tmpX * this.columnWidth, tmpY * this.columnHeight, this.columnWidth, this.columnHeight);
  }
}
