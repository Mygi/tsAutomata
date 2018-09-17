import { OnInit, Component } from '@angular/core';
import { Mosaic } from '../mosaic/models/mosaic.model';
import { AutomataBuilder } from './automata-builder';
import { AutomataConfigService, AutomataConfig } from './automata-config';

@Component({
    selector: 'app-automata',
    template: ''
})
export class AutomataComponent {

    public mosaic: Mosaic = new Mosaic();
    color = '#000';
    columnWidth: number;
    columnHeight: number;
    numRows: number;
    numColumns: number;

    onColor = '#FFF';
    offColor = '#000';
    constructor(protected _mosaicService: AutomataBuilder) {
    }
    protected processConfig(config: AutomataConfig ) {
        this.columnHeight = config.columnHeight;
        this.columnWidth = config.columnWidth;
        this.numColumns = config.numColumns;
        this.numRows = config.numRows;
        this.color = config.paintColour;
    }
    /**
     * Rgenerate the automata model
     *
     * @memberof AutomataComponent
     */
    public drawMosaic(): void {
        this.mosaic = this._mosaicService.createMosaic(this.numRows, this.numColumns, this.columnWidth, this.columnHeight,
             this.onColor, this.offColor);
    }
}
