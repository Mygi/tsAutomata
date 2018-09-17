import { Automata } from './automata';

  export abstract class AutomataBuilder {
    public abstract createMosaic(numRows: number, numCols: number, columnWidth: number, columnHeight: number,
                 onColour: string, offColour: string): Automata;
    public abstract setColor(color: string, x: number, y: number): void;
  }
