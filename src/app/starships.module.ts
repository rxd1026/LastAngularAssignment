import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipsParentComponent } from './starships-parent/starships-parent.component';
import { StarshipsChildComponent } from './starships-child/starships-child.component';

import { Routes, RouterModule } from '@angular/router';
import { ApiCallService } from './api-call.service';

const routes: Routes = [
  { path: 'starships-load', component: StarshipsParentComponent }
];

@NgModule({
  declarations: [StarshipsParentComponent, StarshipsChildComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StarshipsModule { 
  constructor(private svc: ApiCallService){
    this.svc.printToConsole("Got The Response Starships")
  }
}
