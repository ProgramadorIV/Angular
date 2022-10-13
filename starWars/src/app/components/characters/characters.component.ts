import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/characters';
import { Test } from 'src/app/interfaces/test';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characterList:  Character[] = [];
  pages: number = 0;

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.getCharacterPage(1);
  }

  getCharacterPage(id: number){

    this.characterService.getCharacters(id).subscribe(resp => {
      this.characterList = resp.results;
      this.pages = Math.ceil(resp.count / 10);
    });
  }

  isUrlValid(str: string){
    let url;

    try {
      url = new URL(str)
      return true;
    }
    catch(_){
      return false;
    }

  }

  getPhotoUrl(character: Character){

    let id = character.url.split('/').reverse()[1];
    let link = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;

    return link;

  }

  errorPhoto(){
    return 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png';
  }


  counter(){
    return new Array(this.pages);
  }
}
