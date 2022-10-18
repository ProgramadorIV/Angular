import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonResponse } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-desplegable-list',
  templateUrl: './desplegable-list.component.html',
  styleUrls: ['./desplegable-list.component.css']
})
export class DesplegableListComponent implements OnInit {

  listadoPokemon: Pokemon[]=[];
  pokemonSelected: Pokemon | undefined;
  pokemonPhotoUrl = '';

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemons(50);
  }

  getPokemons(limit: number){

    this.pokemonService.getPokemonList(limit).subscribe(resp =>{
      this.listadoPokemon = resp.results;
    })
  }

  getPhotoUrl(){
    let id = this.pokemonSelected?.url.split("/").reverse()[1];
    this.pokemonPhotoUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

}
