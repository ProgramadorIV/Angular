import { Component, OnInit } from '@angular/core';
import { Municipality } from 'src/app/interfaces/municipality';
import { MunicipalitiesService } from 'src/app/services/municipalities.service';

@Component({
  selector: 'app-municipalities',
  templateUrl: './municipalities.component.html',
  styleUrls: ['./municipalities.component.css']
})
export class MunicipalitiesComponent implements OnInit {

  municipalitiesList: Municipality [] = [];
  constructor(private service: MunicipalitiesService) { }

  ngOnInit(): void {
    this.service.getMunicipalitiesByProvince('02').subscribe(resp => {
      this.municipalitiesList = resp;
    })
  }

}
