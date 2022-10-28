import { Component } from '@angular/core';
import { StickerService } from 'src/app/Services/sticker.service';

@Component({
  selector: 'app-resultados-stickers',
  templateUrl: './resultados-stickers.component.html',
  styleUrls: ['./resultados-stickers.component.css']
})
export class ResultadosStickersComponent {

  constructor(private stickerService: StickerService) { }

  get stickers() {
    return this.stickerService.results;
  }

}
