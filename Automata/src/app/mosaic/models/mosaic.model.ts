import { Tile } from './tile.model';
import { Automata } from '../../contracts/automata';

export class Mosaic implements Automata {
    public nodes: Tile[][];
    constructor() {
        this.nodes = [];
    }
}
