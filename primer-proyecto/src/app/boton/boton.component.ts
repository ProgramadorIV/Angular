import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {

  color = 'white';

  constructor() { }

  ngOnInit(): void {
  }

  cambiarColor(){

    if(this.color == 'white'){

      this.color = 'dark';
    }
    else{

      this.color = 'white';
    }
    console.log(this.color);
  }
}
