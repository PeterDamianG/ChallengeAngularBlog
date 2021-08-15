import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos-details',
  templateUrl: './todos-details.component.html',
  styleUrls: ['./todos-details.component.css'],
})
export class TodosDetailsComponent implements OnInit, DoCheck {
  id: string = this.route.snapshot.params['id'];
  isLoading: boolean = true;
  todo: any | null = null;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
  ) {}

  /*
   ** Change contain of getTodo to
   ** this.todo = this.todoService.getTodoDetailMOCK();
   ** For use a Mock system.
   */
  getTodo(): void {
    this.todoService
      .getTodoByIDHTTP(Number(this.id))
      .subscribe((todo: any) => (this.todo = todo));
  }

  changeCompleted(): void {
    this.todo.completed = !this.todo.completed;
  }

  ngOnInit(): void {
    this.getTodo();
  }

  ngDoCheck(): void {
    if (this.todo) this.isLoading = false;
    if (this.todo === undefined) this.isLoading = false;
  }
}
