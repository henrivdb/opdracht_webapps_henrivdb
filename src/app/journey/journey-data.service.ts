import { Injectable } from '@angular/core';
import { Journey } from './journey.model';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { AuthenticationService } from '../user/authentication.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class JourneyDataService {
  private _appUrl = '/API';

  
    constructor(private http :Http, private auth: AuthenticationService){}
    
    get journeys() : Observable<Journey[]>
    {
      return this.http.get(`${this._appUrl}/journeys`, 
      { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) })
      .map(res =>res.json()
      .map(item => Journey.fromJSON(item))
      .filter((jour:Journey) => jour.user.includes(this.auth.user$.getValue())));
    }

    getJourney(id): Observable<Journey> {
      return this.http.get(`${this._appUrl}/journey/${id}`)
        .map(response => response.json()).map(item => Journey.fromJSON(item));
    }
  
    addNewJourney(jour) : Observable<Journey>
    {
      return this.http.post(this._appUrl+"/journeys/", jour, 
      { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) })      
      .map(jour => jour.json())
      .map(item => Journey.fromJSON(item));
    }

    deleteJourney(jour) {
      return this.http.delete(`${this._appUrl}/journey/${jour.id}`)
      .map(res => res.json())
      .map(item => Journey.fromJSON(item));
    }

    updateJourney(jour){
      return this.http.put(`${this._appUrl}journey/${jour.id}`, jour);
    }
}
