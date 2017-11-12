import { Component, OnInit, Input } from '@angular/core';
import { Output } from '@angular/core/src/metadata/directives';
import { Journey } from './journey.model';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.css']
})
export class JourneyComponent implements OnInit {

  @Input() public journey:Journey;  

  constructor() {
    }

  ngOnInit() {
  }

}
