import {Injectable} from '@angular/core';

interface IUser {
  userName: string;
  password: string;
}

@Injectable()
export class AuthService {
  currentUser:IUser
  loginUser(userName: string, password: string) {

  }
}
