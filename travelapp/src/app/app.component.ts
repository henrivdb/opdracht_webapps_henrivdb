import { Component } from '@angular/core';
import { Journey } from './journey/journey.model';
import { JourneyDataService } from './journey-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [JourneyDataService]
})
export class AppComponent {
  private _journeys: Journey[];

  constructor(private _journeyDataService: JourneyDataService)
  {
    this._journeys = this._journeyDataService.journeys;
  }

  get journeys() : Journey[]
  {
    return this._journeys;
  }

  newJourneyAdded(journey)
  {
    this._journeyDataService.addNewJourney(journey);
  }

}
