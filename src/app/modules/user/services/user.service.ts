import { Injectable } from '@angular/core';
import { User } from '../data/user.model';
import { UserList } from '../data/userList.model';
import { UserDetails } from '../data/userDetail.model';
import { MOCKUSER } from '../data/mockUser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private allUser: User[] = MOCKUSER;
  private usersList: UserList[] = this.allUser.map(
    ({ id, name }: User): UserList => ({
      id,
      name,
    }),
  );
  private userDetails: UserDetails[] = this.allUser.map(
    ({ id, name, website, company }: User): UserDetails => ({
      id,
      name,
      website,
      company,
    }),
  );

  getUsersList() {
    return this.usersList;
  }

  getUserDetail(index: number) {
    return this.userDetails[index];
  }
}
