import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { JourneyComponent } from './journey/journey.component';
import { AddJourneyComponent } from './add-journey/add-journey.component';
import { JourneyListComponent } from './journey-list/journey-list.component';
import { JourneyDetailComponent } from './journey-detail/journey-detail.component';
import { JourneyDataService } from './journey-data.service';
import {JourneyResolver} from './journey-resolver.service';
import { EditJourneyComponent } from './edit-journey/edit-journey.component';


const routes = [
  { path: 'list', component: JourneyListComponent },
  { path: 'add', component: AddJourneyComponent },
  { path: 'detail/:id', component: JourneyDetailComponent},
  { path: 'edit/:id', component: EditJourneyComponent}
];

@NgModule({
  declarations: [
    JourneyComponent,
    AddJourneyComponent,
    JourneyListComponent,
    JourneyDetailComponent,
    EditJourneyComponent],
    imports: [
      HttpModule,
      CommonModule,
      ReactiveFormsModule,
      RouterModule.forChild(routes)
    ],  
    providers: [ 
      JourneyDataService,
      JourneyResolver 
    ],    
  })
  export class JourneyModule { }