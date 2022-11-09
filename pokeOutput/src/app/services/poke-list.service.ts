import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PokemonDetails, PokemonListResponse } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeListService {

  constructor(private http: HttpClient) { }

  getPokemonList(offset: number, limit: number): Observable<PokemonListResponse>{
    return this.http.get<PokemonListResponse>(`${environment.apiBaseUrl}/pokemon?offset=${offset}&limit=${limit}`)
  }

  getPokeDetails(id: number): Observable<PokemonDetails>{
    return this.http.get<PokemonDetails>(`${environment.apiBaseUrl}/pokemon/${id}`)
  }
}
