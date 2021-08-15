import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-albums-gallery',
  templateUrl: './albums-gallery.component.html',
  styleUrls: ['./albums-gallery.component.css'],
})
export class AlbumsGalleryComponent implements OnInit, DoCheck {
  id: string = this.route.snapshot.params['id'];
  isLoading: boolean = true;
  allImg: any | null = null;
  columns: number = 4;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
  ) {}

  getAlbum(): void {
    this.albumService
      .getAllImgAlbumHTTP(Number(this.id))
      .subscribe((allImg: any) => (this.allImg = allImg));
  }

  ngOnInit(): void {
    this.getAlbum();
  }

  ngDoCheck(): void {
    if (this.allImg) this.isLoading = false;
    if (this.allImg === undefined) this.isLoading = false;
  }
}
