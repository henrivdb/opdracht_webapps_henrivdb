import { Component, OnInit } from '@angular/core';
import { JourneyDataService } from '../journey-data.service';
import { Journey } from '../journey.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms/src/validators';
import { forEach } from '@angular/router/src/utils/collection';

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

    //const id = this.route.snapshot.paramMap.get('id');
    //this.journeyDataService.getJourney(id).subscribe(item => this._journey = item);

    //this.route.data.subscribe(item => this._recipe = item['recipe']);
     /*this.route.paramMap.subscribe(pa =>
      this.journeyDataService.getJourney(pa.get('id')).subscribe(item => this._journey = item)
     );*/
     this.journeyDataService.getJourney("5a2582952f24b0bcc8e642db")
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
        console.log(this.resumeText);
      });
  }


    get journey() {
      return this._journey;
    }

    edit(){
      this.router.navigate(['journey/edit', this._journey.id]);
    }
}
