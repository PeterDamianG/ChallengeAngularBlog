import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css'],
})
export class UsersDetailsComponent {
  id: number = Number(this.route.snapshot.params['id']);
  user = this.userService.getUserDetail(this.id - 1);

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) {}
}
