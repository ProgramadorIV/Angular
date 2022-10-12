import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/interfaces/films';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  filmList:  Film[] = [];
  pages: number = 0;

  constructor(private filmService: FilmsService) { }

  ngOnInit(): void {
    this.getFilmPage(1);
  }

  getFilmPage(id: number){

    this.filmService.getFilms(id).subscribe(resp => {
      this.filmList = resp.results;
      this.pages = Math.ceil(resp.count / 10);
    });
  }

  getPhotoUrl(film: Film){

    let id = film.url.split('/').reverse()[1];
    return `https://starwars-visualguide.com/assets/img/films/${id}.jpg`
  }

  counter(){
    return new Array(this.pages);
  }

}
