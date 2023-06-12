import { Component, OnInit } from '@angular/core';

interface Tarefa{

  nome: string;
  descricao: string;
  categoria: string;

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
    descricao:'',
    categoria: ''

  }

  categorias:string [] = [];

  tarefas: Tarefa [] = [];

  variavelArrastando: Tarefa = {nome: '', descricao: '', categoria: ''};
  categoriaDrop: string = '';
  indexDrop: number = 0;



  ngOnInit(): void {

    this.pegaDoLocalStorage();

  }

  pegaDoLocalStorage(): void {
    const listaLocalStorageCategoria = localStorage.getItem('listaDeCategorias');
    if (listaLocalStorageCategoria !== null) {
      this.categorias = JSON.parse(listaLocalStorageCategoria);
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
      descricao: this.tarefaModelo.descricao,
      categoria: this.tarefaModelo.categoria,
    };
    this.tarefas.push(novaTarefa);
    this.enviaTarefasParaLocalStorage();

    this.tarefaModelo.nome = '';
    this.tarefaModelo.descricao = '';
    this.tarefaModelo.categoria = '';

  }
  deletaTarefa(indice: number):void{

    this.tarefas.splice(indice,1);
    localStorage.setItem("listaDeTarefas",JSON.stringify(this.tarefas))
  }


  dropOver(categoria: string, event: Event):void{
    event.preventDefault();
    this.variavelArrastando.categoria = categoria
    this.enviaTarefasParaLocalStorage();

  }

  

  drag(tarefa: Tarefa){

    this.variavelArrastando = tarefa;

  }

  getIndex (event: Event, index: number): void {
    event.preventDefault();
    this.indexDrop = index;
  }

  drop(event: Event): void {
    event.preventDefault();
    this.tarefas.splice(this.tarefas.indexOf(this.variavelArrastando), 1);
    this.tarefas.splice(this.indexDrop, 0, this.variavelArrastando);
    this.enviaTarefasParaLocalStorage;

  }



}

