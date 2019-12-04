import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleParentComponent } from './people-parent/people-parent.component';
import { PeopleChildComponent } from './people-child/people-child.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'people-load', component: PeopleParentComponent}
]


@NgModule({
  declarations: [PeopleParentComponent, PeopleChildComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class PeopleModule { }
