import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { FilmsComponent } from './components/films/films.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { SpeciesComponent } from './components/species/species.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { MenuComponent } from './menu/menu/menu.component';

const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'species-list', component: SpeciesComponent},
  {path: 'characters-list', component: CharactersComponent},
  {path: 'films-list', component: FilmsComponent},
  {path: 'starships-list', component: StarshipsComponent},
  {path: 'vehicles-list', component: VehiclesComponent},
  {path: 'planets-list', component: PlanetsComponent},
  {path: '', redirectTo: '/menu', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
