import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    console.log(this.user);
  }

  goBack(): void {
    this.router.navigate(['/users']);
  }
}
