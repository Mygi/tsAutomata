import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tile } from '../models/tile.model';
import { Mosaic } from '../models/mosaic.model';
import { AutomataBuilder } from '../../contracts/automata-builder';
import { Automata } from '../../contracts/automata';
import { AutomataConfig } from '../../contracts/automata-config';

@Injectable({
  providedIn: 'root'
})
export class MosaicService extends AutomataBuilder {


  private _numRows = 10;
  private _numColumns = 10;
  private _mosaic: Mosaic = new Mosaic();
  constructor() {
    super();
  }

  public createMosaic(numRows: number, numColumns: number, columnWidth: number,
    columnHeight: number, onColour: string, offColour: string): Mosaic {
      console.log( 'called create');
    this._numRows = numRows;
    this._numColumns = numColumns;
    return this.buildModel(columnWidth, columnHeight, onColour, offColour);

  }
  // A 2D render function as O(i*j)
  // Row-wise Array
  public buildModel(columnWidth: number, columnHeight: number, onColour: string, offColour: string): Mosaic {
    // this._mosaic.nodes =

    for (let j = 0; j < this._numRows; j++) {
      this._mosaic.nodes[j] = [];
      for (let i = 0; i < this._numColumns; i++) {
        // create Column
        this._mosaic.nodes[j][i] = new Tile(j, i, columnWidth, columnHeight);
        this._mosaic.nodes[j][i].colour = (i % 2 === j % 2) ? offColour : onColour;
      }
    }
    console.log( this._numRows );
    return this._mosaic;
  }
  /**
   *Set the pixel color in the model
   *
   * @param {string} color
   * @param {number} x
   * @param {number} y
   * @memberof MosaicService
   */
  public setColor(color: string, x: number, y: number) {
    this._mosaic.nodes[y][x].colour = color;
  }
}

