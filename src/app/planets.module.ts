import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsParentComponent } from './planets-parent/planets-parent.component';
import { PlanetsChildComponent } from './planets-child/planets-child.component';

import { Routes, RouterModule } from '@angular/router';

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
export class PlanetsModule { }
