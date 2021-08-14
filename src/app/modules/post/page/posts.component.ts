import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
})
export class PostsComponent implements OnInit {
  allPosts: any = [];
  columns: string[] = ['id', 'userId', 'title'];

  constructor(private postService: PostService) {}

  /*
   ** Change contain of getPosts to
   ** this.allPosts = this.postService.getPostsListMOCK();
   ** For use a Mock system.
   */
  getPosts(): void {
    this.postService
      .getAllPostHTTP()
      .subscribe((posts: any) => (this.allPosts = posts));
  }
  ngOnInit(): void {
    this.getPosts();
  }
}
