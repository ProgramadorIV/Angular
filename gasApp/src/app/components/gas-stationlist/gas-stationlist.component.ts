import { Component, OnInit } from '@angular/core';
import { GasStation, GasStationsResponse } from 'src/app/interfaces/gas-stationlist';
import { GasStationlistService } from 'src/app/services/gas-stationlist.service';

@Component({
  selector: 'app-gas-stationlist',
  templateUrl: './gas-stationlist.component.html',
  styleUrls: ['./gas-stationlist.component.css']
})
export class GasStationlistComponent implements OnInit {

  stationsList: GasStation [] = [];

  constructor(private stationsService: GasStationlistService) { }

  ngOnInit(): void {
    this.getAllStations();
  }

  getAllStations(){
    this.stationsService.getAllStations().subscribe(resp => {
      this.stationsList = resp.ListaEESSPrecio;
    });
  }
}
