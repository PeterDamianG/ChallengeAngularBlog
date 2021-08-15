import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Album } from '../data/album.model';
import { AlbumList } from '../data/albumList.model';
import { AlbumDetails } from '../data/albumDetails.model';
import { Photo } from '../data/photo.model';
import { MOCKALBUM } from '../data/mockAlbum';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  /*
   ** Service Mocked
   */
  private allAlbumsMOCK: Album[] = MOCKALBUM;
  private albumsListMOCK: AlbumList[] = this.allAlbumsMOCK.map(
    ({ id, title }: Album): AlbumList => ({
      id,
      title,
    }),
  );
  // Method for album.components.ts in MOCK
  getAlbumsListMOCK(): AlbumList[] {
    return this.albumsListMOCK;
  }
  // Method for albums-details.components.ts in MOCK
  getAlbumsDetailMOCK(index: number): AlbumDetails | null {
    const album: Album = this.allAlbumsMOCK[index];
    if (album)
      return {
        userId: album.userId,
        title: album.title,
        id: album.id,
      };
    else return null;
  }
  /*
   ** Service by HTTP
   */
  constructor(private http: HttpClient) {}

  private readonly ALBUMSURL = 'https://jsonplaceholder.typicode.com/albums';

  // Method for album.components.ts in HTTP
  getAllAlbumsHTTP(): Observable<AlbumList[]> {
    return this.http.get<AlbumList[]>(this.ALBUMSURL).pipe(
      tap((_) => console.log('fetched albums')),
      catchError(this.handleError<Album[]>('getAllAlbumsHTTP', [])),
      map((data) => data.map((d) => ({ id: d.id, title: d.title }))),
    );
  }

  // Method for album-details.components.ts in HTTP
  getAlbumByIDHTTP(id: number): Observable<Album> {
    const url = `${this.ALBUMSURL}/${id}`;
    return this.http.get<Album>(url).pipe(
      tap((_) => console.log(`fetched album by id=${id}`)),
      catchError(this.handleError<Album>(`getAlbumByIDHTTP id=${id}`)),
    );
  }

  // Method for album-gallery.components.ts in HTTP
  getAllImgAlbumHTTP(id: number): Observable<Photo[]> {
    const url = `${this.ALBUMSURL}/${id}/photos`;
    return this.http.get<Photo[]>(url).pipe(
      tap((_) => console.log(`fetched all img albums by id=${id}`)),
      catchError(this.handleError<Photo[]>(`getPostCommentsHTTP id=${id}`)),
      map((data) =>
        data.map((d) => ({ url: d.url, thumbnailUrl: d.thumbnailUrl })),
      ),
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
