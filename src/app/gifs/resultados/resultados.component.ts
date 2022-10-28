import { Component } from '@angular/core';
import { GifsService } from 'src/app/Services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css'],
})
export class ResultadosComponent {
  constructor(private gifsService: GifsService) {}

  get gifs() {
    return this.gifsService.results;
  }
}
