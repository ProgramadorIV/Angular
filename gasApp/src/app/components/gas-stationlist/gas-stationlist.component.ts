import { Component, OnInit } from '@angular/core';
import { GasStation, GasStationsResponse } from 'src/app/interfaces/gas-stationlist';
import { Province } from 'src/app/interfaces/provinces';
import { GasStationlistService } from 'src/app/services/gas-stationlist.service';
import { ProvincesService } from 'src/app/services/provinces.service';

@Component({
  selector: 'app-gas-stationlist',
  templateUrl: './gas-stationlist.component.html',
  styleUrls: ['./gas-stationlist.component.css']
})
export class GasStationlistComponent implements OnInit {

  fuelType: Number = 1;
  filteredList: GasStation [] = [];
  stationsList: GasStation [] = [];
  provincesList: Province [] = [];
  max: number = 0;

  constructor(private stationsService: GasStationlistService, private provincesService: ProvincesService) { }

  ngOnInit(): void {
    this.getAllStations();
    this.getAllProvinces();
  }

  getAllProvinces(){
    this.provincesService.getProvinces().subscribe(resp => {
      this.provincesList = resp;
    })
  }

  getAllStations(){
    this.stationsService.getAllStations().subscribe(resp => {
      this.stationsList = resp.ListaEESSPrecio;
      this.filteredList = resp.ListaEESSPrecio;
    });
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  filterByValue(max: number, fuelType: Number) {

    switch (Number(fuelType)) {
      case 1:

        this.filteredList = this.stationsList.filter(element => +(element['Precio Gasoleo A'].replace(",", ".")) < max
        && element['Precio Gasoleo A'] != '');
        break;

      case 2:

        this.filteredList = this.stationsList.filter(element => +(element['Precio Gasolina 98 E5'].replace(",", ".")) < max
        && element['Precio Gasolina 98 E5'] != '');
        break;

      case 3:
        this.filteredList = this.stationsList.filter(element => +(element['Precio Hidrogeno'].replace(",", ".")) < max
        && element['Precio Hidrogeno'] != '');
        break;

      default:
        break;
    }
  }
}
