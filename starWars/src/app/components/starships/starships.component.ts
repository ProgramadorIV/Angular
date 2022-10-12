import { Component, OnInit } from '@angular/core';
import { Starship } from 'src/app/interfaces/starships';
import { StarshipsService } from 'src/app/services/starships.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  starshipList: Starship[]=[];
  pages: number = 0;

  constructor(private starshipService: StarshipsService) { }

  ngOnInit(): void {
    this.getStarships(1);
  }

  getStarships(id: number){

    return this.starshipService.getStarships(id).subscribe(resp => {
      this.starshipList = resp.results;
      this.pages = Math.ceil(resp.count / 10);
    });
  }

  getPhotoUrl(starship: Starship){

    let id = starship.url.split('/').reverse()[1];
    return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
  }

  counter(){
    return new Array(this.pages);
  }

}
