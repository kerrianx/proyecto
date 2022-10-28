import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GifsPageComponent } from './gifs/gifs-page/gifs-page.component';
import { PageStickersComponent } from './stickers/page-stickers/page-stickers.component';

const routes: Routes = [
  {path: 'sticker', component:PageStickersComponent },
  {path: '', component: GifsPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }