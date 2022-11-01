import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actor, ActorDetails } from 'src/app/interfaces/actors';
import { ActorsService } from 'src/app/services/actors.service';
import { environment } from 'src/environments/environment';
import { ActorDetailsComponent } from './actor-details/actor-details.component';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {

  totalPages: number = 0;
  actorList: Actor []=[];
  page: number = 1;

  constructor(private actorService: ActorsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getActorPage(this.page);
  }

  getActorPage(page: number): void{

    this.actorService.getActors(page).subscribe(resp =>{

      this.actorList = resp.results;
      this.totalPages = resp.total_pages;
    });
  }

  counter(): Array<Number>{
    return new Array (this.totalPages);
  }

  getPhotoUrl(img: string): string{

    return `${environment.actorImgBaseUrl}${img}`;
  }

  openActorDialog(actor: Actor){

    let id: number = actor.id
    this.dialog.open(ActorDetailsComponent, {

      width: '50%',
      data: {
        actorId: id
      }
    });
  }

  changePage(event: any){
    this.page = event;
    this.getActorPage(this.page);
  }

}
