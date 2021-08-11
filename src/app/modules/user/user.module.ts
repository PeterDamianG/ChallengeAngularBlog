import { NgModule } from '@angular/core';
import { UsersComponent } from './page/users.component';
import { UserRoutingModule } from './user.routing';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [UsersComponent],
  imports: [UserRoutingModule, SharedModule],
})
export class UserModule {}
