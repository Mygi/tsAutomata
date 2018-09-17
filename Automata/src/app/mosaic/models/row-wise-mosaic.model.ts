import { Tile } from './tile.model';

export class RowWiseMosaic {
    public rows: Array<Array<Tile>>;
    constructor(rows: number, cols: number) {
        this.rows = Array<Array<Tile>>(rows);
        // map with Apply
        this.rows.map(row => row = Array<Tile>(cols));
        // for loop
        // for( let i = 0; i < this.rows.length; i ++ ){
        //     rows[i] = Array<Tile>(cols);
        // }
    }
}
