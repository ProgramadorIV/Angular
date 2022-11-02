import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActorData, ActorDetails } from 'src/app/models/interfaces/actors';
import { ActorsService } from 'src/app/services/actors.service';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.css']
})
export class ActorDetailsComponent implements OnInit {

  actorDetails: ActorDetails = {} as ActorDetails;

  constructor(@Inject(MAT_DIALOG_DATA) public data: ActorData, private actorService: ActorsService) { }

  ngOnInit(): void {

    this.getActorDetails(this.data.actorId)
  }

  getActorDetails(id: number): void{
    this.actorService.getActorDetails(id).subscribe(resp => {

      this.actorDetails = resp;
    });
  }

}
