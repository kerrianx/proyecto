import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BusquedaComponent, ResultadosComponent, GifsPageComponent],
  imports: [CommonModule, SharedModule],
  exports: [BusquedaComponent, ResultadosComponent, GifsPageComponent],
})
export class GifsModule {}
