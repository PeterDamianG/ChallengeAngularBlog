import { Component } from '@angular/core';
import { User } from '../data/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  allUsers: User[] = this.userService.getMockAllUsers();
  columns: string[] = ['id', 'name'];

  constructor(private userService: UserService) {}
}
