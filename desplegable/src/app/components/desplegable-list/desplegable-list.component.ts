import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-desplegable-list',
  templateUrl: './desplegable-list.component.html',
  styleUrls: ['./desplegable-list.component.css']
})
export class DesplegableListComponent implements OnInit {

  listadoPokemon: Pokemon[]=[];
  pokemon: Pokemon | undefined;
  i = 1;

  constructor(private pokemoService: PokemonService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.pokemoService.getPokemonList().subscribe( resp => {
      this.listadoPokemon = resp.results;
    });
  }

  getPhotoUrl(pokemon: Pokemon){
    let id = pokemon.url.split("/").reverse()[1];
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  getPokemonInfo(pokemon: Pokemon){

    this.pokemoService.getPokemonDetails(pokemon).subscribe(resp =>{
      this
    })
  }

}
