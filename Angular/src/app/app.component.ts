import {Component} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {User} from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  usersArr: User[] = [];
  user: User = {name: '', surname: '', email: '', age: 0};

  name = new FormControl('', [Validators.required, Validators.minLength(2)]);
  surname = new FormControl('', [Validators.required, Validators.minLength(2)]);
  email = new FormControl('', [Validators.required, Validators.minLength(6), Validators.email]);
  age = new FormControl(0, [Validators.required, Validators.minLength(1), Validators.min(0)]);
  form2 = new FormGroup({
    name: this.name,
    surname: this.surname,
    email: this.email,
    age: this.age,
  });


  title = 'Angular';


  submit1(form1: NgForm): void {
    console.log(form1);
    const newUser: User = {name: this.user.name, age: this.user.age, email: this.user.email, surname: this.user.surname};
    this.usersArr.push(newUser);
    console.log(this.usersArr);
  }

  submit2(form2: FormGroup): void {
    console.log(form2);
    const q = form2.controls; // для сокращения
    const newUser: User = {name: q.name.value, age: q.age.value, email: q.email.value, surname: q.surname.value};
    this.usersArr.push(newUser);
    console.log(this.usersArr);
  }
}
