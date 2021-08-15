import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Todo } from '../data/todo.model';
import { TodoList } from '../data/todoList.model';
import { TodoDetails } from '../data/todoDetails.model';
import { MOCKTODO } from '../data/mockTodo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  /*
   ** Service Mocked
   */
  private allTodosMOCK: Todo[] = MOCKTODO;
  private todosListMOCK: TodoList[] = this.allTodosMOCK.map(
    ({ id, userId, title, completed }: Todo): TodoList => ({
      id,
      userId,
      title,
      completed,
    }),
  );
  // Method for todo.components.ts in MOCK
  getTodosListMOCK(): TodoList[] {
    return this.todosListMOCK;
  }
  // Method for todos-details.components.ts in MOCK
  getTodoDetailMOCK(index: number): TodoDetails | null {
    const todo: Todo = this.allTodosMOCK[index];
    if (todo)
      return {
        userId: todo.userId,
        title: todo.title,
        completed: todo.completed,
      };
    else return null;
  }
  /*
   ** Service by HTTP
   */
  constructor(private http: HttpClient) {}

  private readonly TODOSURL = 'https://jsonplaceholder.typicode.com/todos';

  // Method for todos.components.ts in HTTP
  getAllTodoHTTP(): Observable<TodoList[]> {
    return this.http.get<TodoList[]>(this.TODOSURL).pipe(
      tap((_) => console.log('fetched to do s')),
      catchError(this.handleError<Todo[]>('getAllTodoHTTP', [])),
      map((data) =>
        data.map((d) => ({
          id: d.id,
          userId: d.userId,
          title: d.title,
          completed: d.completed,
        })),
      ),
    );
  }

  // Method for todos-details.components.ts in HTTP
  getTodoByIDHTTP(id: number): Observable<Todo> {
    const url = `${this.TODOSURL}/${id}`;
    return this.http.get<Todo>(url).pipe(
      tap((_) => console.log(`fetched to do by id=${id}`)),
      catchError(this.handleError<Todo>(`getUserByIDHTTP id=${id}`)),
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
