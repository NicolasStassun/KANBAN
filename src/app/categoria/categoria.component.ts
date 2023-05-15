import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['/categoria.component.css']
})

export class CategoriaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {



  }
  novaCategoria: string = "";

  categorias: string [] = [];

}
