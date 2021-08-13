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
  user = this.userService.getUserDetail(this.id);

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    console.log(this.user);
  }
}
