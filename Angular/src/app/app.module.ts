import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarComponent } from './components/car/car.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { FullUserComponent } from './components/full-user/full-user.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
    FullUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: 'link/home', component: HomeComponent
    },
      {
        path: 'link/users', component: UsersComponent, children: [
          { path: ':id', component: FullUserComponent}
        ]
      },
      {
        path: 'link/cars', component: CarsComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
