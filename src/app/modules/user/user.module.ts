import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { UsersComponent } from './page/users.component';
import { UsersDetailsComponent } from './page/user-details/users-details.component';
import { UsersPostsComponent } from './page/user-posts/users-posts.component';

@NgModule({
  declarations: [UsersComponent, UsersDetailsComponent, UsersPostsComponent],
  imports: [
    UserRoutingModule,
    SharedModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
  ],
})
export class UserModule {}
