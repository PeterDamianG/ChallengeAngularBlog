import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostRoutingModule } from './post.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { PostsComponent } from './page/posts.component';
import { PostsDetailsComponent } from './page/post-details/posts-details.component';

@NgModule({
  declarations: [PostsComponent, PostsDetailsComponent],
  imports: [
    PostRoutingModule,
    SharedModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
  ],
})
export class PostModule {}
