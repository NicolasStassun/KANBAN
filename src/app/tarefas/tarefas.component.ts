import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { User } from 'src/models/users/user';
import { UserRepository } from 'src/repositories/user.repository';
import { AppComponent } from '../app.component';

interface Propriedade{

  nome:string,
  tipo: string,
  items?: string[]

}

interface Tarefa{

  nome: string;
  propriedades: Propriedade[]

}

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})


export class TarefasComponent implements OnInit {

  @Input() userTarefa!: User

  private userId: string = 'diogo.defante';
  private users: User[] = [];
  user!: User;

  constructor(
    private userRepository: UserRepository
  ) {
    userRepository.getUsers().subscribe({
      next:(value)=>{
        console.log(value)
      }
    })
    this.user = this.getUsuarioLogado();
    console.log(this.user);
  }

  

  private getUsuarioLogado(): User {
    return this.users.find((user) => {
      return user.id === this.userId
    }) as User;
  }

  

  tarefaModelo: Tarefa = {

    nome: '',
    propriedades: [] 

  }

  propriedades: Propriedade [] = [];

  tarefas: Tarefa [] = [];

  categoriaDrop: string = '';
  indexDrop: number = 0;



  ngOnInit(): void {

    this.pegaDoLocalStorage();

    console.log(this.user)

  }

  pegaDoLocalStorage(): void {
    const listaLocalStoragePropriedade = localStorage.getItem('listaDePropriedade');
    if (listaLocalStoragePropriedade !== null) {
      this.propriedades = JSON.parse(listaLocalStoragePropriedade);
    }
    const listaLocalStorageTarefa = localStorage.getItem('listaDeTarefas');
    if (listaLocalStorageTarefa !== null) {
      this.tarefas = JSON.parse(listaLocalStorageTarefa);
    }
  }

  

  enviaTarefasParaLocalStorage(): void {
    localStorage.setItem("listaDeTarefas", JSON.stringify(this.tarefas));
  }

  adicionarTarefa(): void {
  
    if (this.hasPermission('Add')) {

      alert('Pode cadastrar');
    const novaTarefa: Tarefa = {
      nome: this.tarefaModelo.nome,
      propriedades: this.tarefaModelo.propriedades
    };
    this.tarefas.push(novaTarefa);
    this.enviaTarefasParaLocalStorage();

    this.tarefaModelo.nome = '';
    this.tarefaModelo.propriedades = []
    return;
      
    }
    
  }

  editarTarefa(): void {
    if (this.hasPermission('Edit')) {
      alert('Pode cadastrar');
      return;
    }
    alert('Pode cadastrar');
  }

  removerTarefa(indice: number): void {
    if (this.hasPermission('Remove')) {
      this.tarefas.splice(indice,1);
      localStorage.setItem("listaDeTarefas",JSON.stringify(this.tarefas))
    }
    
  }

  hasPermission(permission: string): boolean {
    return this.user.cardPermissions.some((cardPermission) => {
      return cardPermission === permission;
    });
  }


  // dropOver(categoria: string, event: Event):void{
  //   event.preventDefault();
  //   this.variavelArrastando.categoria = categoria
  //   this.enviaTarefasParaLocalStorage();

  // }

  

  // drag(tarefa: Tarefa){

  //   this.variavelArrastando = tarefa;

  // }

  getIndex (event: Event, index: number): void {
    event.preventDefault();
    this.indexDrop = index;
  }

  // drop(event: Event): void {
  //   event.preventDefault();
  //   this.tarefas.splice(this.tarefas.indexOf(this.variavelArrastando), 1);
  //   this.tarefas.splice(this.indexDrop, 0, this.variavelArrastando);
  //   this.enviaTarefasParaLocalStorage;

  // }



}

