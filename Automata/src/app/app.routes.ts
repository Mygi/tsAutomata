import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MosaicModule } from './mosaic/mosaic.module';
import { SvgModule } from './svg/svg.module';
import { CanvasModule } from './canvas/canvas.module';
import { NativeElementModule } from './native-element/native-element.module';
import { NativeCheckerboardComponent } from './native-element/components/native-checkerboard/native-checkerboard.component';
import { SvgCheckerboardComponent } from './svg/components/svg-checkerboard/svg-checkerboard.component';
import { CanvasCheckerboardComponent } from './canvas/canvas-checkerboard/canvas-checkerboard.component';
import { SvgTsCheckerboardComponent } from './svg/components/svg-ts-checkerboard/svg-ts-checkerboard.component';
import { Svg2DSimpleArrayComponent } from './svg/components/svg2-dsimple-array/svg2-dsimple-array.component';


const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/native-element',
        pathMatch: 'full'
    },
    { path: 'native-element', component: NativeCheckerboardComponent, data: { routeIdx: 0 } },
    { path: 'svg-simple', component: SvgCheckerboardComponent, data: { routeIdx: 1 } },
    { path: 'cnavas', component: CanvasCheckerboardComponent, data: { routeIdx: 2 } },
    { path: 'svg-ts', component: SvgTsCheckerboardComponent, data: { routeIdx: 3 } },
    { path: 'svg-optimise-1', component: Svg2DSimpleArrayComponent, data: { routeIdx: 4 }  }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes), MosaicModule, SvgModule, CanvasModule, NativeElementModule],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
