import { Component, OnInit, ViewChild } from '@angular/core';
import { AutomataComponent } from '../../../contracts/automata-component';
import { AutomataBuilder } from '../../../contracts/automata-builder';
import { MosaicConfigService } from '../../../mosaic/services/mosaic-config.service';
import { Tile } from '../../../mosaic/models/tile.model';
import { of, from, pipe } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';
@Component({
  selector: 'app-canvas-automata',
  templateUrl: './canvas-automata.component.html',
  styleUrls: ['./canvas-automata.component.css']
})
export class CanvasAutomataComponent extends AutomataComponent implements OnInit {
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

    for (let j = 0; j < this.numRows; j++) {
      for (let i = 0; i < this.numColumns; i++) {
        // create Column
        const color = this.generateRandomColor();
        // console.log(color);
        ctx.fillStyle = color;
        ctx.beginPath();
        const x = Math.floor((i + this.columnWidth) / 2);
        const y = Math.floor((j + this.columnHeight) / 2);

        const xCenter = x + i * this.columnWidth;
        const yCenter = y + j * this.columnHeight;
        const tile = new Tile(yCenter, xCenter, this.columnWidth, this.columnHeight);
        tile.colour = color;
        this._mosaicService.addNode(i, j, tile);
        ctx.arc(xCenter, yCenter, (this.columnWidth / 2) - 4, 0, 2 * Math.PI, false);
        // Now we need to add to a model
        ctx.fill();
        ctx.closePath();
      }
    }
  }

  private updateState() {
    const ctx = this.context;
    // optional remove
    console.log( ' here' );
    ctx.clearRect(0, 0, this.columnWidth * this.numColumns, this.columnHeight * this.numRows);
    for (let j = 0; j < this.numRows; j++) {
      for (let i = 0; i < this.numColumns; i++) {
        const node = this._mosaicService.getMosaic().nodes[i][j];
        // create Column 1/x influence
        console.log(this._mosaicService.getMosaic().nodes[i][j]);
        console.log(this._mosaicService.getMosaic().nodes[i][j].colour);
        const oldColour = this.hexToRgb(node.colour);
         console.log(oldColour);
        const influence = this.getNeighbours( i, j );
        console.log(influence);
        const deltaR = oldColour.r > influence.r ?  ((oldColour.r - influence.r) / 2) : ((oldColour.r - influence.r) / 2);
        const deltaG = oldColour.g > influence.g ? ((oldColour.g - influence.g) / 2) : ((oldColour.g - influence.g) / 2);
        const deltaB = oldColour.b > influence.b ?  ((oldColour.b - influence.b) / 2) : ((oldColour.b - influence.b) / 2);

        const newR = deltaR + oldColour.r < 0 ? 0 : deltaR + oldColour.r;
        const newG = deltaG + oldColour.g < 0 ? 0 : deltaG + oldColour.g;
        const newB = deltaB + oldColour.b < 0 ? 0 : deltaB + oldColour.b;
        console.log( newR, newG, newB);
        console.log(this.rgbToHex(newR, newG, newB));
        ctx.fillStyle = this.rgbToHex(newR, newG, newB);
        ctx.beginPath();
        const x = Math.floor((i + this.columnWidth) / 2);
        const y = Math.floor((j + this.columnHeight) / 2);
        const xCenter = x + i * this.columnWidth;
        const yCenter = y + j * this.columnHeight;
        ctx.arc(xCenter, yCenter, (this.columnWidth / 2) - 4, 0, 2 * Math.PI, false);
        // Now we need to add to a model
        ctx.fill();
        ctx.closePath();
        console.log(this.rgbToHex(newR, newG, newB));
        node.colour = this.rgbToHex(newR, newG, newB);
      }
    }
  }
  private getNeighbours(x: number, y: number): { r: number, g: number, b: number } {
    const mosaic = this._mosaicService.getMosaic();
    const neighbourColours: string[] = [];
    for ( let i = x - 1; i < x + 2; i++ ) {
      for ( let j = y - 1; j < y + 2; j ++ ) {
        if ( i >= 0 && j >= 0 ) {
          if (mosaic.nodes[j] !== undefined && mosaic.nodes[j][i] !== undefined ) {
            neighbourColours.push(mosaic.nodes[j][i].colour);
          }
        }
      }
    }
    return this.aggregateInfluence(neighbourColours);
  }

  private aggregateInfluence(hexColours: string[]): { r: number, g: number, b: number } {
    const rTotal = { r: 0, g: 0, b: 0 };
    const rAverage = { r: 0, g: 0, b: 0 };
    hexColours.forEach( colour => {
      const rgb = this.hexToRgb(colour);
      console.log( colour );
      rTotal.r += rgb.r;
      rTotal.b += rgb.b;
      rTotal.g += rgb.g;
    });
    rAverage.r = Math.floor(rTotal.r / hexColours.length );
    rAverage.g = Math.floor(rTotal.g / hexColours.length);
    rAverage.b = Math.floor(rTotal.b / hexColours.length);
    return rAverage;
  }
  private hexToRgb(hex): { r: number, g: number, b: number } {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  private rgbToHex(r: number, g: number, b: number) {
    // tslint:disable-next-line:no-bitwise
    return '#' + Math.floor(((1 << 24) + ((+r) << 16) + ((+g) << 8) + (+b))).toString(16).slice(1);
  }
  generateRandomColor(): string {
    return '#' + Math.random().toString(16).slice(-6);
  }
  updateCanvas(x, y) {
    // const canvas = this.myCanvas.nativeElement;
    // this.context = canvas.getContext('2d');

    // const ctx = this.context;
    // console.log( this.color );
    // ctx.fillStyle = this.color;

    // const col = Math.floor(x / this.columnWidth);
    // const row = Math.floor(y / this.columnHeight);
    // const tmpX = (col * this.columnWidth) + Math.floor((col + this.columnWidth) / 2);
    // const tmpY = (row * this.columnWidth) + Math.floor((row + this.columnWidth) / 2);
    // console.log( tmpX, tmpY );

    // ctx.beginPath();
    // ctx.arc(tmpX, tmpY, (this.columnWidth / 2) - 4, 0, 2 * Math.PI, false);
    // ctx.fill();
    this.updateState();
  }

}
