import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts-comments',
  templateUrl: './posts-comments.component.html',
})
export class PostsCommentsComponent implements OnInit {
  id: string = this.route.snapshot.params['id'];
  postComments: any = [];
  columns: string[] = ['name', 'email', 'body'];

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
  ) {}

  /*
   ** Change contain of getPostComments to
   ** this.postComments = this.postService.getPostCommentsMOCK();
   ** For use a Mock system.
   */
  getPosts(): void {
    this.postService
      .getPostCommentsHTTP(Number(this.id))
      .subscribe((comments: any) => (this.postComments = comments));
  }
  ngOnInit(): void {
    this.getPosts();
  }
}
