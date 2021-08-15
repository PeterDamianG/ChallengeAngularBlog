import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-albums-gallery',
  templateUrl: './albums-gallery.component.html',
  styleUrls: ['./albums-gallery.component.css'],
})
export class AlbumsGalleryComponent implements OnInit, DoCheck, OnDestroy {
  id: string = this.route.snapshot.params['id'];
  isLoading: boolean = true;
  allImg: any | null = null;
  columns: string = '4';

  destroyed = new Subject<void>();

  // Create a map to display breakpoint names for demonstration purposes.
  displayNameMap = new Map([
    [Breakpoints.XSmall, '1'],
    [Breakpoints.Small, '2'],
    [Breakpoints.Medium, '3'],
    [Breakpoints.Large, '4'],
    [Breakpoints.XLarge, '5'],
  ]);

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
    breakpointObserver: BreakpointObserver,
  ) {
    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe((result) => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.columns = this.displayNameMap.get(query) ?? 'Unknown';
          }
        }
      });
  }

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

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
