import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleParentComponent } from './people-parent/people-parent.component';
import { PeopleChildComponent } from './people-child/people-child.component';

import { Routes, RouterModule } from '@angular/router';
import { ApiCallService } from './api-call.service';
import { FormsModule } from '@angular/forms';




const routes: Routes = [
  {path: 'people-load', component: PeopleParentComponent}
]


@NgModule({
  declarations: [PeopleParentComponent, PeopleChildComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), 
    FormsModule,
    
  ],
  providers: [ApiCallService]
})
export class PeopleModule {

  constructor(private svc: ApiCallService){
    this.svc.printToConsole("Got The Response People")
    
  }

  

 }
