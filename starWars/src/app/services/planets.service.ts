import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { PlanetResult } from '../interfaces/planets';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) { }

  getPlanets(page: number): Observable<PlanetResult>{
    return this.http.get<PlanetResult>(`${environment.apiBaseUrl}/planets?page=${page}`);
  }
}
