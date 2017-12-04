import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Journey } from './journey.model';
import { JourneyDataService } from './journey-data.service';

@Injectable()
export class JourneyResolver implements Resolve< Journey > {
    constructor(private journeyService: JourneyDataService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Journey> {
        return this.journeyService.getJourney(route.params[':id']);
    }
}
