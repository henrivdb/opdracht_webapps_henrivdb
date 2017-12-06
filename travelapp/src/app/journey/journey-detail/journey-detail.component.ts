import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { JourneyDataService } from '../journey-data.service';
import { Journey } from '../journey.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms/src/validators';
import { forEach } from '@angular/router/src/utils/collection';

declare var jquery:any; 
declare var $ :any;

@Component({
  selector: 'app-journey-detail',
  templateUrl: './journey-detail.component.html',
  styleUrls: ['./journey-detail.component.css']
})
export class JourneyDetailComponent implements OnInit {
  private _journey:Journey;
  public resumeText: string[];
  
  constructor(private route: ActivatedRoute, private journeyDataService: JourneyDataService,
    private router:Router) { }

  ngOnInit() {

    $("body").css("background", "none");
    
    this.route.paramMap.subscribe(pa =>
      this.journeyDataService.getJourney(pa.get('id'))
      .subscribe(item => {
        this._journey=item
        let i=0;
        this.resumeText= new Array();
         item.user.forEach(u=>{
           if(item.resume[i]!=null && item.resume[i].trim()!="")
           {
           this.resumeText.push("Review of "+u+":\n"+item.resume[i]);
           i++;
           }
         });
       }));
  }

    get journey() {
      return this._journey;
    }

    edit(){
      this.router.navigate(['journey/edit', this._journey.id]);
    }

    delete()
    {
      var conf= confirm("Are you sure you want to delete this journey?");
      if(conf)
      {
      this.journeyDataService.deleteJourney(this._journey).subscribe();
      this.router.navigate(['journey/list']);
      }
    }
}
