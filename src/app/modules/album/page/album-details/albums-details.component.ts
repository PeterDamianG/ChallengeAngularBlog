import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-albums-details',
  templateUrl: './albums-details.component.html',
  styleUrls: ['./albums-details.component.css'],
})
export class AlbumsDetailsComponent implements OnInit, DoCheck {
  id: string = this.route.snapshot.params['id'];
  isLoading: boolean = true;
  album: any | null = null;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
  ) {}

  /*
   ** Change contain of getAlbum to
   ** this.album = this.albumService.getAlbumDetailMOCK();
   ** For use a Mock system.
   */
  getAlbum(): void {
    this.albumService
      .getAlbumByIDHTTP(Number(this.id))
      .subscribe((album: any) => (this.album = album));
  }

  ngOnInit(): void {
    this.getAlbum();
  }

  ngDoCheck(): void {
    if (this.album) this.isLoading = false;
    if (this.album === undefined) this.isLoading = false;
  }
}
