import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
})
export class AlbumsComponent implements OnInit {
  allAlbums: any = [];
  columns: string[] = ['id', 'title'];

  constructor(private albumService: AlbumService) {}

  /*
   ** Change contain of getAlbums to
   ** this.allAlbums = this.albumsService.getAlbumsListMOCK();
   ** For use a Mock system.
   */
  getAlbums(): void {
    this.albumService
      .getAllAlbumsHTTP()
      .subscribe((albums: any) => (this.allAlbums = albums));
  }
  ngOnInit(): void {
    this.getAlbums();
  }
}
