import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon, PokemonResponse } from '../interfaces/pokemon';

const API_BASE_URL = 'https://pokeapi.co/api/v2';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  public getPokemonList(limit: number): Observable<PokemonResponse>{

    return this.http.get<PokemonResponse>(`${API_BASE_URL}/pokemon?limit=${limit}`);
  }

  public getPokemonDetails(pokemon: Pokemon): Observable<PokemonResponse>{

    let id = pokemon.url.split('/').reverse()[1];
    return this.http.get<PokemonResponse>(`${API_BASE_URL}/pokemon/${id}`);

  }
}
