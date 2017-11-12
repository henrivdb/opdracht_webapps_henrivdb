import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Journey } from '../journey/journey.model';

@Component({
  selector: 'app-add-journey',
  templateUrl: './add-journey.component.html',
  styleUrls: ['./add-journey.component.css']
})
export class AddJourneyComponent implements OnInit {

  @Output() public newJourney= new EventEmitter<Journey>();

  constructor() { }

  ngOnInit() {
  }

  addJourney(newJourneyDestination: HTMLInputElement) : boolean
  {
    let journey= new Journey(newJourneyDestination.value);
    this.newJourney.emit(journey);
    return false;
  }
}
