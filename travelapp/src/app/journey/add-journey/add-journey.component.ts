import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Journey } from '../journey.model';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { JourneyDataService } from '../journey-data.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../user/authentication.service';
import { ValidatorFn } from '@angular/forms/src/directives/validators';
import { AbstractControl, FormArray } from '@angular/forms/src/model';
import { Observable } from 'rxjs/Observable';

function compareDates(control: AbstractControl): { [key: string]: any } {
  const startDate = control.get('startDate');
  const endDate = control.get('endDate');
  return startDate.value < endDate.value ? null : { 'afterDate': true };
}

declare var jquery:any; 
declare var $ :any;

@Component({
  selector: 'app-add-journey',
  templateUrl: './add-journey.component.html',
  styleUrls: ['./add-journey.component.css']
})
export class AddJourneyComponent implements OnInit {

  private journey : FormGroup;  
  
  public users = new Array();

  constructor(private fb:FormBuilder, private _journeyDataService : JourneyDataService, private router:Router,
    private auth: AuthenticationService){

  }

  get startDateControl(): FormControl {
    return <FormControl>this.journey.get('dateGroup').get('startDate');
  }

  ngOnInit() {
    $("body").css("background", "none");    
    this.auth.allUsers.subscribe(items => this.users= items.filter(u=> u != this.auth.user$.getValue()));
    this.journey= this.fb.group({
        name: ['',[Validators.required, Validators.minLength(3)]],
        destination: ['',[Validators.minLength(3)]],
        country : ['', [Validators.required]],
        user : [],        
        dateGroup: this.fb.group({
          startDate: ['', [Validators.required]],          
          endDate : ['']
        }, { validator: compareDates })
      });
  } 

  onSubmit()
  { 
    var user= new Array();
    user.push(this.auth.user$.getValue());
    if(this.journey.value.user != null)
    {
    this.journey.value.user.forEach(element => {
      user.push(element);
    });
  }

    var resume= new Array(user.length);
    
    let jour = new Journey(this.journey.value.name,this.journey.value.destination, this.journey.value.startDate, 
      this.journey.value.endDate, this.journey.value.country, user, resume);
    if(this.journey.valid)
      {
    this._journeyDataService.addNewJourney(jour).subscribe();
      this.router.navigate(['journey/list']);
      }
  }

  onCancel()
  {
    this.router.navigate(['journey/list']);
  }

}
