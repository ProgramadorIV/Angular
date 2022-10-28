import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/interfaces/actors';
import { ActorsService } from 'src/app/services/actors.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {

  totalPages: number = 0;
  actorList: Actor []=[];
  page: string = '1';

  constructor(private actorService: ActorsService) { }

  ngOnInit(): void {
    this.getActorPage(this.page);
  }

  getActorPage(page: string){

    this.actorService.getActors(page).subscribe(resp =>{

      this.actorList = resp.results;
      this.totalPages = resp.total_pages;
    });
  }

  getPhotoUrl(img: string){

    return `${environment.actorImgBaseUrl}${img}`;
  }


}
