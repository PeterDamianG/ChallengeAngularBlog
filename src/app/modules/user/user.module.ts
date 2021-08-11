import { NgModule } from '@angular/core';
import { UsersComponent } from './page/users.component';
import { UserRoutingModule } from './user.routing';

@NgModule({
  declarations: [UsersComponent],
  imports: [UserRoutingModule],
})
export class UserModule {}
