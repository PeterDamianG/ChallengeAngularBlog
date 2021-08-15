import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './page/albums.component';
import { AlbumsDetailsComponent } from './page/album-details/albums-details.component';
import { AlbumsGalleryComponent } from './page/album-gallery/albums-gallery.component';

export const routes: Routes = [
  {
    path: '',
    component: AlbumsComponent,
  },
  {
    path: ':id',
    component: AlbumsDetailsComponent,
  },
  {
    path: ':id/photos',
    component: AlbumsGalleryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumRoutingModule {}
