import { Injectable } from '@nestjs/common';
import { Data } from './data';

@Injectable()
export class UsersService {
  findOne(username: string) {
    for (let i = 0; i < Data.users.length; i++) {
      if (Data.users[i].username === username) {
        return Data.users[i];
      }
    }
    return `User not found`;
  }
}
