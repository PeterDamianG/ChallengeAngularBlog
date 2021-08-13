import { Component } from '@angular/core';
import { UserList } from '../data/userList.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent {
  allUsers: UserList[] = this.userService.getUsersList();
  columns: string[] = ['id', 'name'];

  constructor(private userService: UserService) {}
}
