import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateSessionDto } from '../models/dto/create-session.dto';
import { DeleteSessionDto } from '../models/dto/delete-session.dto';
import { CreateSession } from '../models/interfaces/create-session';
import { DeleteSession } from '../models/interfaces/delete-session';
import { RequestToken } from '../models/interfaces/request-token';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private http: HttpClient) { }

  createToken(): Observable<RequestToken>{
    return this.http.get<RequestToken>(
      `${environment.apiBaseUrl}/authentication/token/new?api_key=${environment.apiKey}`
    );
  }

  createSession(sessionDto: CreateSessionDto): Observable<CreateSession>{
    return this.http.post<CreateSession>(
      `${environment.apiBaseUrl}/authentication/session/new?api_key=${environment.apiKey}`,
      sessionDto
    );
  }

  deleteSession(dSessionDto: DeleteSessionDto): Observable<DeleteSession>{
    return this.http.delete<DeleteSession>(
      `${environment.apiBaseUrl}/authentication/session?api_key=${environment.apiKey}`,
      {
        body: dSessionDto,
      }
    );
  }


}
