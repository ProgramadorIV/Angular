import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Provinces } from '../interfaces/provinces';

@Injectable({
  providedIn: 'root'
})
export class ProvincesService {

  constructor(private http: HttpClient) { }

  getProvinces(): Observable<Provinces>{
    return this.http.get<Provinces>(`${environment.provinceUrl}`)
  }
}
