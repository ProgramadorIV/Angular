import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmResult } from '../interfaces/films';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient) { }

  getFilms(page: number): Observable<FilmResult>{
    return this.http.get<FilmResult>(`${environment.apiBaseUrl}/films?page=${page}`)
  }
}
