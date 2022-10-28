import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/Services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
})
export class BusquedaComponent {
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>
  searchTerm: string;

  constructor(private gifsService: GifsService) {
    this.searchTerm = '';
  }

  onChangeSearchTerm = (event: Event) => {
    const value = (event.target as HTMLInputElement).value;

    this.searchTerm = value;
  };

  onSearchGifs = () => {
    this.gifsService.getGifs(this.searchTerm);
  };

  onCleanGifs = () => {
    this.searchTerm = '';
    this.gifsService.cleanGifs()
  }
}
