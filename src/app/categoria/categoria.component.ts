import { Component, OnInit } from '@angular/core';

interface Propriedade{

  nome:string,
  tipo: string,
  items?: string[]

}

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  item:string = "";
  itemPropriedadeExistente:string = "";
  

  propriedadeModelo: Propriedade = { 
      nome: "",
      tipo: "",
      items: []
 };

  propriedades : Propriedade[] = [];

  constructor() { }

  ngOnInit(): void {

    this.pegaPropriedadesDoLocalStorage();

  }

  adicionariItemPropriedadeExistente(propriedade: Propriedade): void{

    propriedade.items?.push(this.itemPropriedadeExistente)
    this.itemPropriedadeExistente = ""

  }

  adicionariItem(): void{

    this.propriedadeModelo.items?.push(this.item)
    this.item = ""

  }

  cadastrarPropriedade(): void {
    if (this.propriedadeModelo.nome !== "") {

      const novaPropriedade: Propriedade = {
        nome: this.propriedadeModelo.nome,
        tipo: this.propriedadeModelo.tipo,
        items: this.propriedadeModelo.items,
      };

      if(novaPropriedade.tipo != "Select"){

        novaPropriedade.items = [];

      }

      this.propriedades.push(novaPropriedade);
      this.enviaPropriedadeParaLocalStorage();
      this.propriedadeModelo.nome = "";
      this.propriedadeModelo.tipo = "";
      this.propriedadeModelo.items = [];
    }
  }

  pegaPropriedadesDoLocalStorage(): void {
    const listaLocalStoragePropriedade = localStorage.getItem('listaDePropriedade');
    if (listaLocalStoragePropriedade !== null) {
      this.propriedades = JSON.parse(listaLocalStoragePropriedade);
    }
  }

  enviaPropriedadeParaLocalStorage(): void {
    localStorage.setItem("listaDePropriedade", JSON.stringify(this.propriedades));
  }

  
  

}
