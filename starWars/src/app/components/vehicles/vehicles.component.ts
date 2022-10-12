import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/interfaces/vehicles';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehicleList: Vehicle[]=[];
  pages: number = 0;

  constructor(private vehicleService: VehiclesService) { }

  ngOnInit(): void {
    this.getVehiclePage(1);
  }

  getVehiclePage(id: number){
    this.vehicleService.getVehicles(id).subscribe(resp => {
      this.vehicleList = resp.results;
      this.pages = Math.ceil(resp.count / 10);
    });
  }

  getPhotoUrl(vehicle: Vehicle){

    let id = vehicle.url.split('/').reverse()[1];
    return `https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`
  }

  counter(){
    return new Array(this.pages);
  }

}
