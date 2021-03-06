import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../data/user.model';
import { UserList } from '../data/userList.model';
import { UserDetails } from '../data/userDetail.model';
import { UserPosts } from '../data/userPosts.model';
import { UserAlbums } from '../data/userAlbums.model';
import { UserTodos } from '../data/userTodos.model';
import { MOCKUSER } from '../data/mockUser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  /*
   ** Service Mocked
   */
  private allUsersMOCK: User[] = MOCKUSER;
  private usersListMOCK: UserList[] = this.allUsersMOCK.map(
    ({ id, name }: User): UserList => ({
      id,
      name,
    }),
  );
  // Method for user.components.ts in MOCK
  getUsersListMOCK(): UserList[] {
    return this.usersListMOCK;
  }
  // Method for user-details.components.ts in MOCK
  getUserDetailMOCK(index: number): UserDetails | null {
    const user: User = this.allUsersMOCK[index];
    if (user)
      return {
        id: user.id,
        name: user.name,
        website: user.website,
        company: user.company,
      };
    else return null;
  }
  /*
   ** Service by HTTP
   */
  constructor(private http: HttpClient) {}

  private readonly USERSURL = 'https://jsonplaceholder.typicode.com/users';

  // Method for user.components.ts in HTTP
  getAllUserHTTP(): Observable<UserList[]> {
    return this.http.get<UserList[]>(this.USERSURL).pipe(
      tap((_) => console.log('fetched users')),
      catchError(this.handleError<User[]>('getAllUserHTTP', [])),
      map((data) => data.map((d) => ({ id: d.id, name: d.name }))),
    );
  }

  // Method for user-details.components.ts in HTTP
  getUserByID(id: number): Observable<User> {
    const url = `${this.USERSURL}/${id}`;
    return this.http.get<User>(url).pipe(
      tap((_) => console.log(`fetched user by id=${id}`)),
      catchError(this.handleError<User>(`getUserByID id=${id}`)),
    );
  }

  // Method for user-posts.components.ts in HTTP
  getAllUserPostsHTTP(id: number): Observable<UserPosts[]> {
    const url = `${this.USERSURL}/${id}/posts`;
    return this.http.get<any>(url).pipe(
      tap((_) => console.log(`fetched user id=${id} all posts`)),
      catchError(this.handleError<any[]>('getAllUserPostsHTTP', [])),
      map((data) => data.map((d: any) => ({ id: d.id, title: d.title }))),
    );
  }

  // Method for user-albums.components.ts in HTTP
  getAllUserAlbumsHTTP(id: number): Observable<UserAlbums[]> {
    const url = `${this.USERSURL}/${id}/albums`;
    return this.http.get<any>(url).pipe(
      tap((_) => console.log(`fetched user id=${id} all albums`)),
      catchError(this.handleError<any[]>('getAllUserAlbumsHTTP', [])),
      map((data) => data.map((d: any) => ({ id: d.id, title: d.title }))),
    );
  }

  // Method for user-todos.components.ts in HTTP
  getAllUserTodosHTTP(id: number): Observable<UserTodos[]> {
    const url = `${this.USERSURL}/${id}/todos`;
    return this.http.get<any>(url).pipe(
      tap((_) => console.log(`fetched user id=${id} all to do's`)),
      catchError(this.handleError<any[]>('getAllUserTodosHTTP', [])),
      map((data) =>
        data.map((d: any) => ({
          id: d.id,
          title: d.title,
          completed: d.completed,
        })),
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
