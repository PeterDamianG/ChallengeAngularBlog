import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users-posts.component.html',
})
export class UsersPostsComponent implements OnInit {
  id: string = this.route.snapshot.params['id'];
  allUserPost: any = [];
  columns: string[] = ['id', 'title'];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) {}

  getUserPosts(): void {
    this.userService
      .getAllUserPostsHTTP(Number(this.id))
      .subscribe((posts) => (this.allUserPost = posts));
  }
  ngOnInit(): void {
    this.getUserPosts();
  }
}
