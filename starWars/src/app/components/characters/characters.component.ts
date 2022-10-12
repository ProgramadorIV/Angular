import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/characters';
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

  getPhotoUrl(character: Character){

    let id = character.url.split('/').reverse()[1];
    return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
  }

  counter(){
    return new Array(this.pages);
  }
}
