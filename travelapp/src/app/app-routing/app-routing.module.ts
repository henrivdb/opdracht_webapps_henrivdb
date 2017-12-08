import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AuthGuardService } from '../user/auth-guard.service';


const appRoutes: Routes = [
  {
    path: 'journey',
    canActivate: [ AuthGuardService ],    
    loadChildren: '../journey/journey.module#JourneyModule'
  },
  { path: '', redirectTo: 'journey/list', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,
      {preloadingStrategy: PreloadAllModules})
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
