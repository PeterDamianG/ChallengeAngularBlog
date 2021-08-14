import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts-details',
  templateUrl: './posts-details.component.html',
  styleUrls: ['./posts-details.component.css'],
})
export class PostsDetailsComponent implements OnInit, DoCheck {
  id: string = this.route.snapshot.params['id'];
  isLoading: boolean = true;
  post: any | null = null;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
  ) {}

  /*
   ** Change contain of getPost to
   ** this.post = this.postService.getPostDetailMOCK();
   ** For use a Mock system.
   */
  getPost(): void {
    this.postService
      .getPostByID(Number(this.id))
      .subscribe((post: any) => (this.post = post));
  }

  ngOnInit(): void {
    this.getPost();
  }

  ngDoCheck(): void {
    if (this.post) this.isLoading = false;
    if (this.post === undefined) this.isLoading = false;
  }
}
