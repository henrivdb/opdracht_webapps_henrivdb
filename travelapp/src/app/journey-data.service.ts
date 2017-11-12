import { Injectable } from '@angular/core';
import { Journey } from './journey/journey.model';

@Injectable()
export class JourneyDataService {
  private _journeys = new Array<Journey>();
  
    constructor()
    {
      let j1 = new Journey('Parijs');
      let j2 = new Journey('Londen');
      let j4 = new Journey('Namibië');
      let j3 = new Journey('Shanghai');
      
      this._journeys.push(j1);
      this._journeys.push(j2);
      this._journeys.push(j3);
      this._journeys.push(j4);
      
    }
    
    get journeys() : Journey[]
    {
      return this._journeys;
    }
  
    addNewJourney(journey)
    {
      this._journeys.push(journey);
    }
}
