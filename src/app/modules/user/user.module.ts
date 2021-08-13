import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { UsersComponent } from './page/users.component';
import { UsersDetailsComponent } from './page/user-details/users-details.component';

@NgModule({
  declarations: [UsersComponent, UsersDetailsComponent],
  imports: [UserRoutingModule, SharedModule, CommonModule, MatButtonModule],
})
export class UserModule {}
