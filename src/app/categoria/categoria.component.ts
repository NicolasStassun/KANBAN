import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  novaCategoria: string = "";
  categorias: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.pegaCategoriaDoLocalStorage();
  }

  cadastrarCategoria(categoria: string | null): void {
    if (categoria !== null) {
      this.categorias.push(categoria);
      this.enviaCategoriaParaLocalStorage();
      console.log(categoria);
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
}
