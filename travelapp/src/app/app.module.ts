import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { JourneyModule } from './journey/journey.module';
import { UserModule } from './user/user.module';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent],
  imports: [
    BrowserModule,
    UserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
