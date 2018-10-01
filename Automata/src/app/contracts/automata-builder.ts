import { Automata } from './automata';
import { AutomataNode } from './node';

  export abstract class AutomataBuilder {
    public abstract createMosaic(numRows: number, numCols: number, columnWidth: number, columnHeight: number,
                 onColour: string, offColour: string): Automata;
    public abstract setColor(color: string, x: number, y: number): void;
    public abstract addNode(x: number, y: number, tile: AutomataNode): void;
    public abstract getMosaic(): Automata;
  }
