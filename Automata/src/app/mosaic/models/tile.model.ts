export class Tile {
    public colour: string;
    public tileColumnId: number;
    public tileRowId: number;
    public pixelWidth: number;
    public pixelHeight: number;

    constructor(row: number, column: number, pixelWidth: number, pixelHeight: number) {
        this.tileRowId = row;
        this.tileColumnId = column;
        this.pixelWidth = pixelWidth;
        this.pixelHeight = pixelHeight;
    }
}