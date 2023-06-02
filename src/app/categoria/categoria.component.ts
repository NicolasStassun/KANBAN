import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  novaCategoria: string = "";
  categorias: string[] = ['TODO', 'DOING', 'DONE'];

  constructor() { }

  ngOnInit(): void {

    this.pegaCategoriaDoLocalStorage();

  }

  cadastrarCategoria(): void {
    if (this.novaCategoria !== "") {
      this.categorias.push(this.novaCategoria);
      this.enviaCategoriaParaLocalStorage();
      console.log(this.novaCategoria);
      this.novaCategoria = "";
    }
  }

  pegaCategoriaDoLocalStorage(): void {
    const listaLocalStorageCategoria = localStorage.getItem('listaDeCategorias');
    if (listaLocalStorageCategoria !== null) {
      this.categorias = JSON.parse(listaLocalStorageCategoria);
    }
  }

  enviaCategoriaParaLocalStorage(): void {
    localStorage.setItem("listaDeCategorias", JSON.stringify(this.categorias));
  }

  deletarCategoriaPadrao: boolean = false;

  deletaCategoria(categoriaRm: string): void {

    this.categorias.splice(this.categorias.indexOf(categoriaRm), 1);
    
    this.novaCategoria = "";
    localStorage.setItem("listaDeCategorias", JSON.stringify(this.categorias));
  }

  
  

}
