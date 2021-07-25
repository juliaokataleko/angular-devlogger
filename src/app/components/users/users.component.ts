import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[];
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
  };

  showExtended: boolean = false;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm', {static: false}) form: any;

  data: any;

  // More used for dependency injection
  constructor(private _userService: UserService) { }

  ngOnInit() {

    this._userService.getData().subscribe(data => {
      console.log(data);      
    })

    // this.users = this._dataService.getUsers();

    // Assincronous version with Observable
    this._userService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    })

    this.loaded = true;

  }

  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();

    this.users.unshift(this.user);
    // alert("Enviado...")
    this.user = {
      firstName: '',
      lastName: '',
      email: ''
    }
  }

  toggleHide(user: User) {
    user.hide = !user.hide;
  }

  onSubmit({
    value, valid
  }: {
    value: User,
    valid: boolean
  }) {
    if(!valid) {
      console.log("Form is not valid...");
    } else {
      value.isActive = true;
      value.registered = new Date();
      this._userService.addUser(value);
      this.form.reset();
    }
  }

  firedEvent(e) {
    console.log(e.target.value);
    console.log(e.type);
    // return false;
  }

}
