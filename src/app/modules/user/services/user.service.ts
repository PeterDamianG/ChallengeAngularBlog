import { Injectable } from '@angular/core';
import { User } from '../data/user.model';
import { MOCKUSER } from '../data/mockUser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private mockAllUser: User[] = MOCKUSER;

  getMockAllUsers() {
    return this.mockAllUser;
  }
}
