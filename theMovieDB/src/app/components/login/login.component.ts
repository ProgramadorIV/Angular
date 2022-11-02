import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreateSessionDto } from 'src/app/models/dto/create-session.dto';
import { DeleteSessionDto } from 'src/app/models/dto/delete-session.dto';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isApproved: boolean = false;
  requestToken: string = "";

  constructor(private authenticationService: AuthorizationService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(queryParams => {
      const ap = queryParams['approved'];
      const requestToken = queryParams['request_token'];
      this.isApproved = ap == 'true' ? true : false;

      if(this.isApproved){
        let session: CreateSessionDto = {} as CreateSessionDto;
        session.request_token = requestToken;
        this.authenticationService.createSession(session).subscribe(resp=>{
          localStorage.setItem('session_id', resp.session_id);
        })
      }
      else {
        if(localStorage.getItem('session_id') != null){
          this.isApproved = true;
        }
      }
    });
  }

  getRequestToken(){
    this.authenticationService.createToken().subscribe(resp => {
      this.requestToken = resp.request_token;
      window.location.href = `https://www.themoviedb.org/authenticate/${this.requestToken}?redirect_to=http://localhost:4200/`;
    });
  }

  logOut(){
    let deleteSessionDto: DeleteSessionDto = {} as DeleteSessionDto;
    if(localStorage.getItem('session_id') != null) {
      deleteSessionDto.session_id = localStorage.getItem('session_id')!;
      this.authenticationService.deleteSession(deleteSessionDto).subscribe(resp => {
        if(resp.success){
          localStorage.removeItem('session_id');
          this.isApproved = false;
        }
      });
    }
  }

}
