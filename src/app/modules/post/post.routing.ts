import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './page/posts.component';
import { PostsDetailsComponent } from './page/post-details/posts-details.component';
import { PostsCommentsComponent } from './page/post-comments/posts-comments.component';

export const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
  },
  {
    path: ':id',
    component: PostsDetailsComponent,
  },
  {
    path: ':id/comments',
    component: PostsCommentsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
