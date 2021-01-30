import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './components/users/users.component';
import {UserInfoComponent} from './components/user-info/user-info.component';

const routes: Routes = [{
  path: '', component: UsersComponent, children: [{
    path: ':id', component: UserInfoComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
