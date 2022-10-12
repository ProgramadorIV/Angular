import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/interfaces/planets';
import { PlanetsService } from 'src/app/services/planets.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  planetList: Planet[]=[];
  pages: number = 0;

  constructor(private planetService: PlanetsService) { }

  ngOnInit(): void {

    this.getPlanetPage(1);
  }

  getPlanetPage(id: number){

    this.planetService.getPlanets(id).subscribe(resp => {
      this.planetList = resp.results;
      this.pages = Math.ceil(resp.count / 10);
    });
  }

  getPhotoUrl(planet: Planet){

    let id = planet.url.split('/').reverse()[1];
    return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
  }

  counter(){
    return new Array(this.pages);
  }

}
