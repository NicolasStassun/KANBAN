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

  listaUsers: User[] = [];

  api_url: string = 'http://localhost:4300'
  
  user:User = {
    id: '',
    nome: '',
    password: '',
    email: '',
    
  };

  ngOnInit(): void {
    this.pegaDoDb();
    console.log(this.listaUsers)
  }

  cadastrarUsuario(){
    let unico = true
    this.listaUsers.forEach(userRegistrados => {
      if(this.user.id != userRegistrados.id && this.user.email != userRegistrados.email && this.user.nome != userRegistrados.nome){
        unico = true
      }
      else{
        unico = false
      }
    });
    if(unico == true){
      this.userRepository.sendUsers(this.user);
    }
  }
  pegaDoDb():void{
    this.userRepository.getUsers().subscribe({
      next:(users)=>{
         for (const user of users) {
            this.listaUsers.push(user)
         }
      }
    })
  }

}
