import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { forkJoin, map, Observable, startWith } from 'rxjs';
import { GasStation, GasStationsResponse } from 'src/app/interfaces/gas-stationlist';
import { Municipality } from 'src/app/interfaces/municipality';
import { Province } from 'src/app/interfaces/provinces';
import { GasStationlistService } from 'src/app/services/gas-stationlist.service';
import { MunicipalitiesService } from 'src/app/services/municipalities.service';
import { ProvincesService } from 'src/app/services/provinces.service';

@Component({
  selector: 'app-gas-stationlist',
  templateUrl: './gas-stationlist.component.html',
  styleUrls: ['./gas-stationlist.component.css']
})
export class GasStationlistComponent implements OnInit {

  myControl = new FormControl('');
  fuelType: Number = 1;
  municipalitiesList: Municipality [] = [];
  municipalitiesSelected: Municipality [] = [];
  filteredList: GasStation [] = [];
  stationsList: GasStation [] = [];
  provincesList: Province [] = [];
  provincesSelected: Province [] = [];
  max: number = 0;
  filteredOptions!: Observable<Municipality[]>;

  constructor(
    private stationsService: GasStationlistService,
    private provincesService: ProvincesService,
    private municipalitiesService: MunicipalitiesService
    ) { }

  ngOnInit(): void {
    this.getAllStations();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(String(value)))
    );
  }

  getAllMunicipalities(provincesSelected: Province []){

    if(provincesSelected.length){
      provincesSelected.forEach(province => {
        this.municipalitiesService.getMunicipalitiesByProvince(province.Provincia).subscribe(resp => {
          this.municipalitiesList.concat(resp);
        });
      });
    }
    else{
      this.provincesList.forEach(province => {
        this.municipalitiesService.getMunicipalitiesByProvince(province.Provincia).subscribe(resp => {
          this.municipalitiesList.concat(resp);
        });
      })
    }
  }

  private _filter(value: String): Municipality[]{
    const filterValue = value.toLowerCase();
    if(this.municipalitiesList.length){
      return this.municipalitiesList.filter(municipality =>
        municipality.Municipio.toLowerCase().includes(filterValue)
        );
    }
    else{
      this.getAllMunicipalities(this.provincesSelected);
      return this.municipalitiesList;
    }


  }

  displayFn(subject: Municipality){
    return subject.Municipio
  }

  getAllStations(){
    let provinces = this.provincesService.getProvinces();
    let stations = this.stationsService.getAllStations();

    forkJoin([provinces, stations]).subscribe(resp => {
      this.provincesList = resp[0];
      this.stationsList = resp[1].ListaEESSPrecio;
      this.filteredList = resp[1].ListaEESSPrecio;
      //this.municipalitiesList = resp[2];
    });
  }

  /*filterByMunicipality(stations: GasStation []){

    if(this.municipalitiesSelected.length)

  }*/

  filterByProvince(stations: GasStation []){

    if(this.provincesSelected.length)
      this.filteredList = stations.filter(
        station => this.provincesSelected.map(provinces => provinces.IDPovincia).includes(station.IDProvincia)
      );
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
