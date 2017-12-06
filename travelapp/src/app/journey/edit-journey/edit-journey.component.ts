import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Journey } from '../journey.model';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { JourneyDataService } from '../journey-data.service';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthenticationService } from '../../user/authentication.service';
import { ValidatorFn } from '@angular/forms/src/directives/validators';
import { AbstractControl } from '@angular/forms/src/model';

function compareDates(control: AbstractControl): { [key: string]: any } {
  const startDate = control.get('startDate');
  const endDate = control.get('endDate');
  return startDate.value < endDate.value ? null : { 'afterDate': true };
}

@Component({
  selector: 'app-edit-journey',
  templateUrl: './edit-journey.component.html',
  styleUrls: ['./edit-journey.component.css']
})
export class EditJourneyComponent implements OnInit {
  private _journey: Journey;
  private journey: FormGroup;

  public resumeText: string;

  private userIndex;

  constructor(private route:ActivatedRoute, private journeyDataService: JourneyDataService,private fb:FormBuilder, private auth:AuthenticationService, private router:Router) { 

  }

   ngOnInit() {
    this.route.paramMap.subscribe(pa =>
      this.journeyDataService.getJourney(pa.get('id'))
      .subscribe(item => {
        this._journey=item;
        this.userIndex= item.user.indexOf(this.auth.user$.getValue());
        this.resumeText= item.resume[this.userIndex];
      }));

    this.journey= this.fb.group({
      resume: this.resumeText,
      });
  }

  get startDateControl(): FormControl {
    return <FormControl>this.journey.get('dateGroup').get('startDate');
  }

  onSubmit()
  {
    this._journey.resume[this.userIndex]= this.journey.value.resume;
    this.journeyDataService.updateJourney(this._journey).subscribe();
    this.router.navigate(['journey/detail', this._journey.id]);
  }


  onCancel()
  {
    this.router.navigate(['journey/detail', this._journey.id]);
  }

}
