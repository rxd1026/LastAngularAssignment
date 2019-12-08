import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterMainComponent } from './footer-main/footer-main.component';
import { Routes, RouterModule } from '@angular/router';
import { PeopleModule } from './people.module';
import { StarshipsModule } from './starships.module';
import { PlanetsModule } from './planets.module';

const routes: Routes = [
  {path:'footer-load', component: FooterMainComponent,
  children: [
    {path: 'people', loadChildren:() => PeopleModule},
    {path: 'starships', loadChildren:() => StarshipsModule},
    {path: 'planets', loadChildren:() => PlanetsModule}
  ]}
]

@NgModule({
  declarations: [FooterMainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FooterModule { }
