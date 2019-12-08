import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyMainComponent } from './body-main/body-main.component';
import { Routes, RouterModule } from '@angular/router';
import { PeopleModule } from './people.module';
import { StarshipsModule } from './starships.module';
import { PlanetsModule } from './planets.module';

const routes: Routes = [
  {path: 'body-load', component: BodyMainComponent,
  children: [
    {path: 'people', loadChildren:() => PeopleModule},
    {path: 'starships', loadChildren:() => StarshipsModule},
    {path: 'planets', loadChildren:() => PlanetsModule}]}
]


@NgModule({
  declarations: [BodyMainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BodyModule { }
