import { Component, OnInit } from '@angular/core';

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

  constructor() { }

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

  cadastrarTarefa():void{
    const novaTarefa: Tarefa = {
      nome: this.tarefaModelo.nome,
      propriedades: this.tarefaModelo.propriedades
    };
    this.tarefas.push(novaTarefa);
    this.enviaTarefasParaLocalStorage();

    this.tarefaModelo.nome = '';
    this.tarefaModelo.propriedades = []

  }
  deletaTarefa(indice: number):void{

    this.tarefas.splice(indice,1);
    localStorage.setItem("listaDeTarefas",JSON.stringify(this.tarefas))
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

