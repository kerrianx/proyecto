import { Component, ElementRef, ViewChild } from '@angular/core';
import { StickerService } from 'src/app/Services/sticker.service';

@Component({
  selector: 'app-busqueda-stickers',
  templateUrl: './busqueda-stickers.component.html',
  styleUrls: ['./busqueda-stickers.component.css']
})
export class BusquedaStickersComponent {
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>
  searchTerm: string;
 
  constructor(private stickerService: StickerService) {
    this.searchTerm = '';
  }

  onChangeSearchTerm = (event: Event) => {
    const value = (event.target as HTMLInputElement).value;

    this.searchTerm = value;
  };

  onSearchGifs = () => {
    this.stickerService.getStickers(this.searchTerm);
  };

  onCleanGifs = () => {
    this.searchTerm = '';
    this.stickerService.cleanStickers()
  }
}


