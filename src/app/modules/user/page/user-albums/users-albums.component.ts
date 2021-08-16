import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-albums',
  templateUrl: './users-albums.component.html',
})
export class UsersAlbumsComponent implements OnInit {
  id: string = this.route.snapshot.params['id'];
  allUserAlbums: any = [];
  columns: string[] = ['id', 'title'];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) {}

  getUserAlbums(): void {
    this.userService
      .getAllUserAlbumsHTTP(Number(this.id))
      .subscribe((albums: any) => (this.allUserAlbums = albums));
  }
  ngOnInit(): void {
    this.getUserAlbums();
  }
}
