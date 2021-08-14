import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Post } from '../data/post.model';
import { PostList } from '../data/postList.model';
import { PostDetails } from '../data/postDetails.model';
import { MOCKPOST } from '../data/mockPost';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  /*
   ** Service Mocked
   */
  private allPostsMOCK: Post[] = MOCKPOST;
  private postsListMOCK: PostList[] = this.allPostsMOCK.map(
    ({ id, userId, title }: Post): PostList => ({
      id,
      userId,
      title,
    }),
  );
  // Method for post.components.ts in MOCK
  getPostsListMOCK(): PostList[] {
    return this.postsListMOCK;
  }
  // Method for posts-details.components.ts in MOCK
  getPostDetailMOCK(index: number): PostDetails | null {
    const post: Post = this.allPostsMOCK[index];
    if (post)
      return {
        userId: post.userId,
        title: post.title,
        body: post.body,
      };
    else return null;
  }
  /*
   ** Service by HTTP
   */
  constructor(private http: HttpClient) {}

  private readonly POSTSURL = 'https://jsonplaceholder.typicode.com/posts';

  // Method for post.components.ts in HTTP
  getAllPostHTTP(): Observable<PostList[]> {
    return this.http.get<PostList[]>(this.POSTSURL).pipe(
      tap((_) => console.log('fetched posts')),
      catchError(this.handleError<Post[]>('getAllPostHTTP', [])),
      map((data) =>
        data.map((d) => ({ id: d.id, userId: d.userId, title: d.title })),
      ),
    );
  }

  // Method for post-details.components.ts in HTTP
  getPostByID(id: number): Observable<Post> {
    const url = `${this.POSTSURL}/${id}`;
    return this.http.get<Post>(url).pipe(
      tap((_) => console.log(`fetched post by id=${id}`)),
      catchError(this.handleError<Post>(`getUserByID id=${id}`)),
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
