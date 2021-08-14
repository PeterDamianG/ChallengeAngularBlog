import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  allUsers: any = [];
  columns: string[] = ['id', 'name'];

  constructor(private userService: UserService) {}

  /*
   ** Change contain of getUsers to
   ** this.allUsers = this.userService.getUsersListMOCK();
   ** For use a Mock system.
   */
  getUsers(): void {
    this.userService
      .getAllUserHTTP()
      .subscribe((users) => (this.allUsers = users));
  }
  ngOnInit(): void {
    this.getUsers();
  }
}
