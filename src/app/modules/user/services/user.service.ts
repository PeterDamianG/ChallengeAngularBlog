import { Injectable } from '@angular/core';
import { MOCKUSER } from '../data/mockUser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getMockUsers() {
    return MOCKUSER;
  }
}
