import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/shared/interfaces/entrada';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public listadoEntradas: Entrada[];

  constructor() {
    this.listadoEntradas = [
      {title: "Hola", summary: "saludo"},
      {title: "Adios", summary: "despedida"}
    ]
  }

  ngOnInit(): void {
  }

}
