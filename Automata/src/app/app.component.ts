import { Component, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { MosaicConfigService } from './mosaic/services/mosaic-config.service';
import { AutomataConfig } from './contracts/automata-config';
import { trigger, state, transition, group, style, animate, query } from '@angular/animations';
import { Router } from '@angular/router';
const left = [
  query(':enter, :leave', style({ position: 'fixed', width: '80%' }), { optional: true }),
  group([
    query(':enter', [style({ transform: 'translateX(-100%)', opacity: 0 }),
    animate('.6s ease-out', style({ transform: 'translateX(0%)', opacity: 1 }))], {
        optional: true,
      }),
    query(':leave', [style({ transform: 'translateX(0%)', opacity: 1 }),
    animate('.6s ease-out', style({ transform: 'translateX(100%)', opacity: 0 }))], {
        optional: true,
      }),
  ]),
];

const right = [
  query(':enter, :leave', style({ position: 'fixed', width: '80%' }), { optional: true }),
  group([
    query(':enter', [style({ transform: 'translateX(100%)', opacity: 0 }),
    animate('.6s ease-out', style({ transform: 'translateX(0%)', opacity: 1 }))], {
        optional: true,
      }),
    query(':leave', [style({ transform: 'translateX(0%)', opacity: 1 }),
    animate('.6s ease-out', style({ transform: 'translateX(-100%)', opacity: 0 }))], {
        optional: true,
      }),
  ]),
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('animRoutes', [
      transition(':increment', right),
      transition(':decrement', left),
    ]),
  ],
})
export class AppComponent {
  title = 'Automata';
  public columnWidth = 100;
  public columnHeight = 100;
  public numColumns = 10;
  public numRows = 10;
  public color: string;
  public triggerUpdate = new BehaviorSubject<boolean>(false);

  constructor(private _configService: MosaicConfigService, private _router: Router ) { }

  public options = new FormGroup({
    rows: new FormControl(this.numRows),
    columns: new FormControl(this.numColumns),
    rowPixels: new FormControl(this.columnHeight),
    columnPixels: new FormControl(this.columnWidth),
    color: new FormControl('#000000', Validators.required),
  });

  updateAutomata() {
    const formModel = this.options.value;
    this.columnHeight = formModel.rowPixels;
    this.columnWidth = formModel.columnPixels;
    this.numRows = formModel.rows;
    this.numColumns = formModel.columns;
    this.color = formModel.color;
    this._configService.setConfig( this.createConfig() );
  }
  createConfig(): AutomataConfig {
    return {
      numRows: this.numRows,
      numColumns: this.numColumns,
      columnHeight: this.columnHeight,
      columnWidth: this.columnWidth,
      paintColour: this.color,
    };
  }
  navigate(item: string) {
      this._router.navigate([item]);
  }
}
