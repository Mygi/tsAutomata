import { Component, OnInit, Input } from '@angular/core';
import { Mosaic } from '../../../mosaic/models/mosaic.model';
import { MosaicService } from '../../../mosaic/services/mosaic.service';
import { AutomataComponent } from '../../../contracts/automata-component';
import { AutomataBuilder } from '../../../contracts/automata-builder';
import { AutomataConfigService } from '../../../contracts/automata-config';
import { MosaicConfigService } from '../../../mosaic/services/mosaic-config.service';

@Component({
  selector: 'app-native-checkerboard',
  templateUrl: './native-checkerboard.component.html',
  styleUrls: ['./native-checkerboard.component.css']
})
export class NativeCheckerboardComponent extends AutomataComponent implements OnInit {

  constructor(protected _mosaicService: AutomataBuilder, protected _configService: MosaicConfigService) {
    super(_mosaicService) ;
    this.offColor = '#58015F';
  }
  ngOnInit(): void {
    this._configService.getConfig().subscribe(config => {
      this.processConfig(config);
      this.offColor = config.paintColour;
    });
  }

  public setPixelColour(x: number, y: number) {
    this._mosaicService.setColor(this.color, x, y);
  }
}
