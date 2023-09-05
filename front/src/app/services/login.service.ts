import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { User } from './../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {

  getByUsername(username: string){
    return this.http.get<User>(this.url.concat('users/'+ username));
  }

  isConnected(){
    sessionStorage.setItem('isConnected', 'true');
  }
  isDisconnected(){
    sessionStorage.setItem('isConnected', 'false');
  }

  findAll(){
    return this.http.get<any>(this.url);
  }
}
