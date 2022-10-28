import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultadosStickersComponent } from './resultados-stickers/resultados-stickers.component';
import { PageStickersComponent } from './page-stickers/page-stickers.component';
import { BusquedaStickersComponent } from './busqueda-stickers/busqueda-stickers.component';
import { NavbarStickerComponent } from './navbar-sticker/navbar-sticker.component';
import { SharedModule } from '../shared/shared.module';
import { SidebarStickersComponent } from './side-bar/side-bar.component';




@NgModule({
  declarations: [
    ResultadosStickersComponent,
    PageStickersComponent,
    BusquedaStickersComponent,
    SidebarStickersComponent,
    //NavbarStickerComponent
   
    
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ResultadosStickersComponent,
    PageStickersComponent,
    BusquedaStickersComponent,
    //NavbarStickerComponent,
    SidebarStickersComponent,
    
    
  ],
})
export class StickersModule { }
