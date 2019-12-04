import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'people', loadChildren: './people.module#PeopleModule'},
  {path: 'planets', loadChildren: './planets.module#PlanetsModule'},
  {path: 'starships', loadChildren: './starships.module#StarshipsModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
