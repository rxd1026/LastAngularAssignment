import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, PreloadingStrategy } from '@angular/router';
import { HeaderMainComponent } from './header-main/header-main.component';
import { BodyMainComponent } from './body-main/body-main.component';
import { PeopleModule } from './people.module';
import { PlanetsModule } from './planets.module';
import { StarshipsModule } from './starships.module';


const routes: Routes = [
  {path: 'people', loadChildren: './people.module#PeopleModule'},
  {path: 'planets', loadChildren: './planets.module#PlanetsModule'},
  {path: 'starships', loadChildren: './starships.module#StarshipsModule'},
  {path: 'header', loadChildren: './header.module#HeaderModule'},
  {path: 'body', loadChildren: './body.module#BodyModule'},
  {path: 'footer', loadChildren: './footer.module#FooterModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
