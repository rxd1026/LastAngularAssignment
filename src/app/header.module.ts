import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMainComponent } from './header-main/header-main.component';
import { Routes,RouterModule } from '@angular/router';
import { PeopleModule } from './people.module';
import { PlanetsModule } from './planets.module';
import { StarshipsModule } from './starships.module';

const routes: Routes = [
    {path: 'load-header', component: HeaderMainComponent,
    children: [
      {path:'people', loadChildren: () => PeopleModule},
      {path:'planets', loadChildren: () => PlanetsModule},
      {path: 'starships', loadChildren: () => StarshipsModule}
      ]}
]

@NgModule({
  declarations: [HeaderMainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HeaderModule { }
