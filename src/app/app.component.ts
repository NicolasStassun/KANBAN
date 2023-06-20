import { Component } from '@angular/core';
import { UserRepository } from 'src/repositories/user.repository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userRepository: UserRepository;

  constructor(
    userReposiroty: UserRepository
  ){
    this.userRepository = userReposiroty
    console.log(this.userRepository.getUsers())

  }

  

  title = "";
}
