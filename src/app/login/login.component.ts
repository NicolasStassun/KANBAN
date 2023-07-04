import { Component, OnInit } from '@angular/core';
import { UserRepository } from 'src/repositories/user.repository';
import { User } from 'src/models/users/user';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private userRepository: UserRepository,
    private cookieService: CookieService
  ) {}

   ngOnInit(): void {
    this.pegaDoDb();
    this.getUsuarioLogado();
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
  

 getUsuarioLogado(): void {
  console.log('a')
  console.log(this.listaUsers)
    for (const i of this.listaUsers) {
      if (i.id == this.userId) { 
        this.user = i;
        console.log(this.user)
        this.cookieService.set('user', JSON.stringify(i));
        console.log("deu certo")
      }
      else{
        console.log("deu errado")
      }
    }
    
  }

  
  pegaDosCookies():void{

    let userString: string = this.cookieService.get('user')

    if (userString) {
    const user = JSON.parse(userString);
    // Use o objeto do tipo usuário conforme necessário
    console.log(user.name);
    console.log(user.age);

  }
}

  listaUsers: User[] = [];
  userId:string = '';
  user: User | undefined;

}