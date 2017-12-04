import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Journey } from '../journey.model';
import { JourneyDataService } from '../journey-data.service';

import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.css']
})
export class JourneyComponent implements OnInit {

  @Input() public journey:Journey;  
  @Output() public deleteJourney = new EventEmitter<Journey>();
  @Output() public detailJourney = new EventEmitter<Journey>();
  private router : Router;
  

  constructor(private _journeyDataService : JourneyDataService) {
    }

  ngOnInit() {
  }

  delete()
  {
    this.deleteJourney.emit(this.journey);
  }

  detail()
  {
    this.detailJourney.emit(this.journey);
  }

}
