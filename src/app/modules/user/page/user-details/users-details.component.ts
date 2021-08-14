import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css'],
})
export class UsersDetailsComponent implements OnInit {
  id: number = Number(this.route.snapshot.params['id']);
  user: any | null = null;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) {}

  /*
   ** Change contain of getUser to
   ** this.allUsers = this.userService.getUserDetailMOCK();
   ** For use a Mock system.
   */
  getUser(): void {
    this.userService
      .getUserByID(this.id)
      .subscribe((user) => (this.user = user));
  }
  ngOnInit(): void {
    this.getUser();
  }
}
