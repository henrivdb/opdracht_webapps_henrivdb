import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JourneyComponent } from './journey/journey.component';
import { AddJourneyComponent } from './add-journey/add-journey.component';

@NgModule({
  declarations: [
    AppComponent,
    JourneyComponent,
    AddJourneyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
