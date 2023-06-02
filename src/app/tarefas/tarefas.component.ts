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


  dropOver(categoria: string):void{

    this.variavelArrastando.categoria = categoria
    this.enviaTarefasParaLocalStorage();

  }

  

  drag(tarefa: Tarefa){

    this.variavelArrastando = tarefa;

  }

}

