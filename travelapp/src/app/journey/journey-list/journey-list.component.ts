import { Component, OnInit } from '@angular/core';
import { Journey } from '../journey.model';
import { JourneyDataService } from '../journey-data.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../../user/authentication.service';

declare var jquery:any; 
declare var $ :any;


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
    $("body").css({
      "background-image": "url(/assets/images/back.JPG)",
      "background-position": "center",
      "background-repeat":" repeat",
      "background-size":"cover"
    });  
    this._journeyDataService.journeys.subscribe(journeys => 
      {this._journeys = journeys;
      });
  }

  detail(journey: Journey)
  {
    this.router.navigate(['journey/detail', journey.id]);
  }

}
