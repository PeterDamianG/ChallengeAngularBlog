import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-todos',
  templateUrl: './users-todos.component.html',
})
export class UsersTodosComponent implements OnInit {
  id: string = this.route.snapshot.params['id'];
  allUserTodos: any = [];
  columns: string[] = ['id', 'title', 'completed'];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) {}

  getUserTodos(): void {
    this.userService
      .getAllUserTodosHTTP(Number(this.id))
      .subscribe((todos: any) => (this.allUserTodos = todos));
  }
  ngOnInit(): void {
    this.getUserTodos();
  }
}
