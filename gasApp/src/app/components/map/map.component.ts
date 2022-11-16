import { MapType } from '@angular/compiler';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { GasStation } from 'src/app/interfaces/gas-stationlist';
import { MapService } from 'src/app/services/map-service.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow = {} as MapInfoWindow;
  @Input () gasStationList: GasStation [] = [];

  mapType = google.maps.MapTypeId.HYBRID;
  stationsCoords: Map<GasStation, google.maps.LatLngLiteral> = new Map();
  center: google.maps.LatLngLiteral = {lat: 0,lng: 0};
  currentUbication = new google.maps.Marker({
    position: this.center,
    icon: 'https://cdn-icons-png.flaticon.com/512/535/535188.png'
  });
  constructor(private mapService: MapService) { }

  ngOnInit(): void {
    this.mapService.getLocation().then(resp=> {
      this.center = {lat: resp.lat, lng: resp.lng}
    });
  }

  generateCoords(station: GasStation){

    let coords: google.maps.LatLngLiteral;
    return coords = {lat: +station['Latitud'].replace(',', '.'), lng: +station['Longitud (WGS84)'].replace(',', '.')}
  }

  openInfoWindow(marker: MapMarker, infoWindow: MapInfoWindow){
    infoWindow.open(marker);
  }



}


