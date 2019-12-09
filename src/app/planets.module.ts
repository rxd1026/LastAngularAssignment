import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsParentComponent } from './planets-parent/planets-parent.component';
import { PlanetsChildComponent } from './planets-child/planets-child.component';

import { Routes, RouterModule } from '@angular/router';
import { ApiCallService } from './api-call.service';
import { PeopleServService } from './people-serv.service';

const routes: Routes = [
  { path: 'planets-load', component: PlanetsParentComponent }
];

@NgModule({
  declarations: [PlanetsParentComponent, PlanetsChildComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PlanetsModule { 

  constructor(private svc: ApiCallService){
    this.svc.printToConsole("Got The Response Planet")
    
  }
}
