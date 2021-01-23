import { Component, OnInit } from '@angular/core';
import { users } from 'src/data/users';
import { User } from 'src/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = users;

  constructor() { }

  ngOnInit(): void {
  }

}
