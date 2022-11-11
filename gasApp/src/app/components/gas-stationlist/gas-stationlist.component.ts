import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
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
  provincesSelected: Province [] = [];
  filteredList: GasStation [] = [];
  stationsList: GasStation [] = [];
  provincesList: Province [] = [];
  max: number = 0;

  constructor(private stationsService: GasStationlistService, private provincesService: ProvincesService) { }

  ngOnInit(): void {
    this.getAllStations();
  }

  getAllStations(){
    let provinces = this.provincesService.getProvinces();
    let stations = this.stationsService.getAllStations();

    forkJoin([provinces, stations]).subscribe(resp => {
      this.provincesList = resp[0];
      this.provincesSelected = resp[0];
      this.stationsList = resp[1].ListaEESSPrecio;
      this.filteredList = resp[1].ListaEESSPrecio;
    });
  }

  filterByProvince(stations: GasStation []){

    if(this.filteredList.length)
      this.filteredList = stations.filter(station => this.getFilteredProvinces().includes(station.Provincia));
  }

  getFilteredProvinces(): String []{
    let provincesId: string [] = []
    this.provincesSelected.forEach(province => {
      provincesId.push(String(province));
    })
    return provincesId;
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

        if(max==0){
          this.filteredList=this.stationsList.filter(element => element['Precio Gasoleo A'] != '');
        }
        else{
          this.filteredList = this.stationsList.filter(element => +(element['Precio Gasoleo A'].replace(",", ".")) < max
          && element['Precio Gasoleo A'] != '');
        }

        this.filterByProvince(this.filteredList);
        break;

      case 2:

        if(max==0){
          this.filteredList = this.stationsList.filter(element => element['Precio Gasolina 98 E5'] != '')
        }
        else{
          this.filteredList = this.stationsList.filter(element => +(element['Precio Gasolina 98 E5'].replace(",", ".")) < max
          && element['Precio Gasolina 98 E5'] != '');
        }
        this.filterByProvince(this.filteredList);
        break;

      case 3:

        if(max== 0){
          this.filteredList = this.stationsList.filter(element => element['Precio Hidrogeno'] != '');
        }
        else{
          this.filteredList = this.stationsList.filter(element => +(element['Precio Hidrogeno'].replace(",", ".")) < max
          && element['Precio Hidrogeno'] != '');
        }
        this.filterByProvince(this.filteredList);
        break;

      default:
        break;
    }
  }
}
