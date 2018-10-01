import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MosaicModule } from './mosaic/mosaic.module';
import { SvgModule } from './svg/svg.module';
import { CanvasModule } from './canvas/canvas.module';
import { NativeElementModule } from './native-element/native-element.module';
import { NativeCheckerboardComponent } from './native-element/components/native-checkerboard/native-checkerboard.component';
import { SvgCheckerboardComponent } from './svg/components/svg-checkerboard/svg-checkerboard.component';
import { CanvasCheckerboardComponent } from './canvas/components/canvas-checkerboard/canvas-checkerboard.component';
import { SvgTsCheckerboardComponent } from './svg/components/svg-ts-checkerboard/svg-ts-checkerboard.component';
import { Svg2DSimpleArrayComponent } from './svg/components/svg2-dsimple-array/svg2-dsimple-array.component';
import { OptimisedCanvasComponent } from './canvas/components/optimised-canvas/optimised-canvas.component';
import { CanvasAutomataComponent } from './canvas/components/canvas-automata/canvas-automata.component';


const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/native-element',
        pathMatch: 'full'
    },
    { path: 'native-element', component: NativeCheckerboardComponent, data: { routeIdx: 0 } },
    { path: 'svg-simple', component: SvgCheckerboardComponent, data: { routeIdx: 1 } },
    { path: 'canvas', component: CanvasCheckerboardComponent, data: { routeIdx: 2 } },
    { path: 'svg-ts', component: SvgTsCheckerboardComponent, data: { routeIdx: 3 } },
    { path: 'svg-optimise-1', component: Svg2DSimpleArrayComponent, data: { routeIdx: 4 }  },
    { path: 'canvas-optimise-1', component: OptimisedCanvasComponent, data: { routeIdx: 5 } },
    { path: 'canvas-automata-1', component: CanvasAutomataComponent, data: { routeIdx: 6 } }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes), MosaicModule, SvgModule, CanvasModule, NativeElementModule],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
