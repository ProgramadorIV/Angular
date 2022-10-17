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
  pokemonSelected: Pokemon = {
    name: "",
    url: ""
  };


  constructor(private pokemonService: PokemonService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getPokemons(50);
  }

  getPokemons(limit: number){

    this.pokemonService.getPokemonList(limit).subscribe(resp =>{
      this.listadoPokemon = resp.results;
    })
  }

  getPhotoUrl(pokemon: Pokemon){
    let id = pokemon.url.split("/").reverse()[1];
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

}
