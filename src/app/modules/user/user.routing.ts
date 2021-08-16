import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './page/users.component';
import { UsersDetailsComponent } from './page/user-details/users-details.component';
import { UsersPostsComponent } from './page/user-posts/users-posts.component';

export const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
  },
  {
    path: ':id',
    component: UsersDetailsComponent,
  },
  {
    path: ':id/posts',
    component: UsersPostsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
