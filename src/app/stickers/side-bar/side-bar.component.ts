import { Component } from '@angular/core';
import { StickerService } from 'src/app/Services/sticker.service';

@Component({
  selector: 'app-sidebar-stickers',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SidebarStickersComponent {
  get historial(){
    return this.stickerService.historial
  }
  constructor(private stickerService: StickerService) { }

  buscar(termino:string){
    this.stickerService.getStickers(termino)
  }

}
