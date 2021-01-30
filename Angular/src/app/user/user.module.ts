import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {UserService} from './services/user.service';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [UsersComponent, UserComponent, UserInfoComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  providers: [UserService]
})
export class UserModule { }
