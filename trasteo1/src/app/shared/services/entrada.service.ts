import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entrada } from '../interfaces/entrada';

@Injectable({
  providedIn: 'root'
})
export class EntradaService {

  constructor(private httpClient: HttpClient) { }

  public cogerEntradas(): Observable<any> {

    return this.httpClient.get<any>('https://jsonplaceholder.typicode.com/posts');
  }

}
