import { Component, OnInit } from '@angular/core';
import { Journey } from '../journey.model';
import { JourneyDataService } from '../journey-data.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../../user/authentication.service';

@Component({
  selector: 'app-journey-list',
  templateUrl: './journey-list.component.html',
  styleUrls: ['./journey-list.component.css']
})
export class JourneyListComponent implements OnInit {
  private _journeys: Journey[];

  constructor(private _journeyDataService: JourneyDataService, private router:Router) { }

  get journeys():Journey[]
  {
    return this._journeys;
  }

  ngOnInit() {
    this._journeyDataService.journeys.subscribe(journeys => 
      {this._journeys = journeys;
      });
  }

  removeJourney(journey: Journey) {
    this._journeyDataService.deleteJourney(journey).subscribe(item =>
      this._journeys = this._journeys.filter(val => item.id !== val.id)
    );
  }

  detail(journey: Journey)
  {
    this.router.navigate(['journey/detail', journey.id]);
  }

}
