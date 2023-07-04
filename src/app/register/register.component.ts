import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/users/user';
import { UserRepository } from 'src/repositories/user.repository';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  

  constructor(
    private userRepository: UserRepository,
  ) { }

  api_url: string = 'http://localhost:4300'
  
  user:User = {
    id: '',
    nome: '',
    password: '',
    email: '',
    
  };

  ngOnInit(): void {
  }

  cadastrarUsuario(){
    this.userRepository.sendUsers(this.user);
  }

}
