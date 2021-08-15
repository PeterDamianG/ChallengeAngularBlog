import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumRoutingModule } from './album.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { AlbumsComponent } from './page/albums.component';
import { AlbumsDetailsComponent } from './page/album-details/albums-details.component';

@NgModule({
  declarations: [AlbumsComponent, AlbumsDetailsComponent],
  imports: [
    AlbumRoutingModule,
    SharedModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
  ],
})
export class AlbumModule {}
