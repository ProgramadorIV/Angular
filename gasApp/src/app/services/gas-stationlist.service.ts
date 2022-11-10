import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GasStationsResponse } from '../interfaces/gas-stationlist';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GasStationlistService {

  constructor(private http: HttpClient) { }

  getAllStations(): Observable<GasStationsResponse>{
    return this.http.get<GasStationsResponse>(`${environment.gasStationUrl}`);
  }
}
