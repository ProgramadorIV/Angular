import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-people',
  templateUrl: './new-people.component.html',
  styleUrls: ['./new-people.component.css']
})
export class NewPeopleComponent implements OnInit {

  chaName: String = '';
  chaHeight: String = '';
  charMass: String = '';
  charHairColor: String = '';
  charSkinColor: String = '';
  charBirthYear: String = '';
  charGender: String = '';
  charHomeworld: String = '';

  loginFormGroup = new FormGroup({
    nameFormControl: new FormControl(this.chaName, Validators.required),
    heightFormControl: new FormControl(this.chaHeight , Validators.required),
    massFormControl: new FormControl(this.charMass , Validators.required),
    hairColorFormControl: new FormControl(this.charHairColor , Validators.required),
    skinColorFormControl: new FormControl(this.charSkinColor , Validators.required),
    birthYearFormControl: new FormControl(this.charBirthYear , Validators.required),
    genderFormControl: new FormControl(this.charGender , Validators.required),
    homeworldFormControl: new FormControl(this.charHomeworld , Validators.required),
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    alert('The new character will be created.');
  }

}
