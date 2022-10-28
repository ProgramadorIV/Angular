import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ActorsResponse } from '../interfaces/actors';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  constructor(private http: HttpClient) { }

    getActors(page: string): Observable<ActorsResponse>{
      return this.http.get<ActorsResponse>(`${environment.apiBaseUrl}/person/popular?api_key=${environment.apiKey}&language=en-US&page=${page}`);
    }
}
