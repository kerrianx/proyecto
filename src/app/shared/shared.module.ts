import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {RouterModule} from '@angular/router';
import { NavbarStickerComponent } from '../stickers/navbar-sticker/navbar-sticker.component';

@NgModule({
  declarations: [NavbarComponent, SidebarComponent,NavbarStickerComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, SidebarComponent,NavbarStickerComponent],
})
export class SharedModule {}
