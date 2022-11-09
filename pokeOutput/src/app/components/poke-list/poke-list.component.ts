import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonDetails } from 'src/app/interfaces/pokemon';
import { PokeListService } from 'src/app/services/poke-list.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {

  isPokemonSelected = false;
  selectedPokemon: PokemonDetails = {} as PokemonDetails;
  pokeList: Pokemon [] = [];

  constructor(private pokemonService: PokeListService) { }

  ngOnInit(): void {
    this.getAllPokemons();
  }

  getAllPokemons(){
    this.pokemonService.getPokemonList(0, 200).subscribe(resp => {
      this.pokeList = resp.results;
    });
  }

  getImgUrl(selectedPokemon: PokemonDetails){
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${selectedPokemon.id}.png`
  }

  getPokemonSelected(pokemonDetails: PokemonDetails){
    this.selectedPokemon = pokemonDetails;
    this.isPokemonSelected = true;
  }

}
