import { AutomataNode } from '../../contracts/node';

export class Tile extends AutomataNode {
    public colour: string;
    public tileColumnId: number;
    public tileRowId: number;
    public pixelWidth: number;
    public pixelHeight: number;

    constructor(row: number, column: number, pixelWidth: number, pixelHeight: number) {
        super();
        this.tileRowId = row;
        this.tileColumnId = column;
        this.pixelWidth = pixelWidth;
        this.pixelHeight = pixelHeight;
    }
}
