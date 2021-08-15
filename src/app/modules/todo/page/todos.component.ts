import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
})
export class TodosComponent implements OnInit {
  allTodos: any = [];
  columns: string[] = ['id', 'userId', 'title', 'completed'];

  constructor(private todoService: TodoService) {}

  /*
   ** Change contain of getTodos to
   ** this.allTodos = this.todoService.getTodosListMOCK();
   ** For use a Mock system.
   */
  getTodos(): void {
    this.todoService
      .getAllTodoHTTP()
      .subscribe((todos: any) => (this.allTodos = todos));
  }
  ngOnInit(): void {
    this.getTodos();
  }
}
