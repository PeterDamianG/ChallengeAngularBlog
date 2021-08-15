import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumRoutingModule } from './album.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { AlbumsComponent } from './page/albums.component';
import { AlbumsDetailsComponent } from './page/album-details/albums-details.component';
import { AlbumsGalleryComponent } from './page/album-gallery/albums-gallery.component';
import {
  DialogDelete,
  DialogContentDelete,
} from './page/album-gallery/dialog-delete/dialog-delete.component';
import {
  DialogImage,
  DialogContentImage,
} from './page/album-gallery/dialog-image/dialog-image.component';

@NgModule({
  declarations: [
    AlbumsComponent,
    AlbumsDetailsComponent,
    AlbumsGalleryComponent,
    DialogDelete,
    DialogContentDelete,
    DialogImage,
    DialogContentImage,
  ],
  imports: [
    AlbumRoutingModule,
    SharedModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
  ],
})
export class AlbumModule {}
