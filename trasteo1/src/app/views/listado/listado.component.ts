import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/shared/interfaces/entrada';
import { EntradaService } from 'src/app/shared/services/entrada.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public listadoEntradas: Entrada[];

  constructor(private entradaService: EntradaService) {

    this.listadoEntradas = [];
  }

  ngOnInit(): void {

    this.cogerEntradas();
  }

  private cogerEntradas (): void{

    this.entradaService.cogerEntradas().subscribe(
      (data) => {

        this.listadoEntradas = data;
      },
      (error) => {

      }
    )
  }

}
