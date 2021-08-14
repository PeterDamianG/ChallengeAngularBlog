import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../data/user.model';
import { UserList } from '../data/userList.model';
import { UserDetails } from '../data/userDetail.model';
import { MOCKUSER } from '../data/mockUser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  /*
   ** Service Mocked
   */
  private allUsersMOCK: User[] = MOCKUSER;
  private usersListMOCK: UserList[] = this.allUsersMOCK.map(
    ({ id, name }: User): UserList => ({
      id,
      name,
    }),
  );
  // Method for user.components.ts
  getUsersListMOCK(): UserList[] {
    return this.usersListMOCK;
  }
  // Method for user-details.components.ts
  getUserDetailMOCK(index: number) {
    const user: User = this.allUsersMOCK[index];
    if (user)
      return {
        id: user.id,
        name: user.name,
        website: user.website,
        company: user.company,
      };
    else return null;
  }
  /*
   ** Service by HTTP
   */
  constructor(private http: HttpClient) {}
  private readonly USERSURL = 'https://jsonplaceholder.typicode.com/users';

  getAllUserHTTP(): Observable<User[]> {
    return this.http.get<User[]>(this.USERSURL);
  }
}
