import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/services/map-service.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  currentLng: number = 0;
  currentLat: number = 0;
  constructor(private mapService: MapService) { }

  ngOnInit(): void {
    this.mapService.getLocation().then(resp=> {
      this.currentLng = resp.lng;
      this.currentLat = resp.lat;
    })
  }





}
