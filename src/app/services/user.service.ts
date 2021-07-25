import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[];
  data: Observable<any>;

  constructor() { 

    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'pedro@email.com',
        isActive: true,
        registered: new Date("12/17/2021 08:08:00"),
        hide: true,
      },
      {
        firstName: 'Maria',
        lastName: 'Gomes',
        email: 'pedro@email.com', 
        isActive: false,
        registered: new Date("11/19/2021 08:08:00"),
        hide: true,
      },
      {
        firstName: 'Pedro',
        lastName: 'Mendes',
        email: 'pedro@email.com',
        isActive: true,
        registered: new Date("12/03/2021 08:08:00"),
        hide: true,
      }
    ]

  }

  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1)
      }, 1000);

      setTimeout(() => {
        observer.next(2)
      }, 2000);

      setTimeout(() => {
        observer.next(3)
      }, 3000);

      setTimeout(() => {
        observer.next(4)
      }, 4000);

    });

    return this.data;
  }

  getUsers(): Observable<User[]> {
    console.log("Fetching users from service...");
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }

}
