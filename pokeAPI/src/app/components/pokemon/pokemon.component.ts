import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon, PokemonDetails } from 'src/app/interfaces/pokemon';
import { PokeListService } from 'src/app/services/poke-list.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input() pokemon: Pokemon = {} as Pokemon;
  @Output() getPokemonDetailsEvent = new EventEmitter<PokemonDetails>();

  constructor(private pokemonService: PokeListService) { }

  ngOnInit(): void {}

  getPokemonById(pokemon: Pokemon){
    let pokemonDetails: PokemonDetails;
    this.pokemonService.getPokeDetails(+pokemon.url.split('/').reverse()[1]).subscribe(resp => {
      pokemonDetails = resp;
      this.getPokemonDetailsEvent.emit(pokemonDetails);
    });
  }

  public getPokemonImgUrl(pokemon: Pokemon): string {
    let id = pokemon.url.split('/').reverse()[1];
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

}
