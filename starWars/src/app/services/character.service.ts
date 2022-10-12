import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CharacterResult } from '../interfaces/characters';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getCharacters(page: number): Observable<CharacterResult>{
    return this.http.get<CharacterResult>(`${environment.apiBaseUrl}/people?page=${page}`);
  }
}
