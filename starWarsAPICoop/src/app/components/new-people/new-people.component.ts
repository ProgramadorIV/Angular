import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Character } from 'src/app/interfaces/characters';
import { Planet } from 'src/app/interfaces/planets';
import { PlanetsService } from 'src/app/services/planets.service';

@Component({
  selector: 'app-new-people',
  templateUrl: './new-people.component.html',
  styleUrls: ['./new-people.component.css']
})
export class NewPeopleComponent implements OnInit {

  character: Character | undefined

  planetsList: Planet []= [];
  numPages: number = 0;

  chaName: String = '';
  chaHeight: String = '';
  charMass: String = '';
  charHairColor: String = '';
  charSkinColor: String = '';
  charBirthYear: String = '';
  charGender: String = '';
  charHomeworld: String = '';

  newFormGroup = new FormGroup({
    nameFormControl: new FormControl(this.chaName, Validators.required),
    heightFormControl: new FormControl(this.chaHeight , Validators.required),
    massFormControl: new FormControl(this.charMass , Validators.required),
    hairColorFormControl: new FormControl(this.charHairColor , Validators.required),
    skinColorFormControl: new FormControl(this.charSkinColor , Validators.required),
    birthYearFormControl: new FormControl(this.charBirthYear , Validators.required),
    genderFormControl: new FormControl(this.charGender , Validators.required),
    homeworldFormControl: new FormControl(this.charHomeworld , Validators.required),
  });

  constructor(private planetService: PlanetsService) { }

  ngOnInit(): void {
    this.getPages();
  }

  onSubmit(){
    alert('The new character has been created.');
  }

  getPages(){
    this.planetService.getAllPlanets().subscribe(resp => {
      this.numPages = resp.count/10;
      this.getEachPage(this.numPages);
    });

  }

  getEachPage(pages: number){

    for (let index = 1; index <= pages; index++) {
      this.planetService.getPlanet(index).subscribe(resp=>{

        resp.results.forEach(planet => {
          this.planetsList.push(planet);
        });
      });
    }
  }

  getSortedList(list: Planet[]){
    list.sort((a,b) => (a.name>b.name ? 1:-1) );
  }


}
