import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MccColorPickerModule } from 'material-community-components';
import { MatRadioModule } from '@angular/material/radio';
import { MosaicService } from './mosaic/services/mosaic.service';
import { AppRoutingModule } from './app.routes';
import { NativeElementModule } from './native-element/native-element.module';
import { CanvasModule } from './canvas/canvas.module';
import { SvgModule } from './svg/svg.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MosaicConfigService } from './mosaic/services/mosaic-config.service';
import { AutomataBuilder } from './contracts/automata-builder';
import { AutomataConfigService } from './contracts/automata-config';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MccColorPickerModule,
    MatInputModule,
    MatFormFieldModule,
    AppRoutingModule,
    NativeElementModule,
    CanvasModule,
    SvgModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [{ provide: AutomataBuilder, useClass: MosaicService},
    MosaicConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
