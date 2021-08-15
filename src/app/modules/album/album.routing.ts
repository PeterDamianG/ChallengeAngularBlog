import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './page/albums.component';
import { AlbumsDetailsComponent } from './page/album-details/albums-details.component';

export const routes: Routes = [
  {
    path: '',
    component: AlbumsComponent,
  },
  {
    path: ':id',
    component: AlbumsDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumRoutingModule {}
