import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AutomataConfig, AutomataConfigService } from '../../contracts/automata-config';

@Injectable({
  providedIn: 'root'
})
export class MosaicConfigService extends AutomataConfigService {
  protected config: BehaviorSubject<AutomataConfig> = new BehaviorSubject<AutomataConfig>(
              { numRows: 10, numColumns: 10, columnHeight: 10, columnWidth: 10, paintColour: '#000'} );

  private _config: AutomataConfig;
  constructor() {
    super();
   }
  /**
 * Set row and column dimensions
 *
 * @returns {BehaviorSubject<AutomataConfig>}
 * @memberof MosaicService
 */
  getConfig(): BehaviorSubject<AutomataConfig> {
    return this.config;
  }
  setConfig(config: AutomataConfig) {
    console.log( 'called');
    this._config = config;
    this.config.next(this._config);
  }
}
