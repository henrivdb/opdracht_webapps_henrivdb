import { Component } from '@angular/core';
import { Journey } from './journey/journey.model';
//import { JourneyDataService } from './journey-dataservice';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './user/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(private authService:AuthenticationService, private router:Router){
  }

  get currentUser(): Observable<string> {
    return this.authService.user$;
  }

  logout()
  {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
