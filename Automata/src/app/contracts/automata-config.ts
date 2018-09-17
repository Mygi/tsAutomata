import { BehaviorSubject } from 'rxjs';

export interface AutomataConfig {
    numRows: number;
    numColumns: number;
    columnHeight: number;
    columnWidth: number;
    paintColour: string;
}
export abstract class AutomataConfigService {
    public abstract getConfig(): BehaviorSubject<AutomataConfig>;
    public abstract setConfig(config: AutomataConfig);
}
