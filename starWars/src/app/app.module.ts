import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ImportsMaterialModule } from './imports-material/imports-material.module';
import { MenuComponent } from './menu/menu/menu.component';
import { FilmsComponent } from './components/films/films.component';
import { CharactersComponent } from './components/characters/characters.component';
import { SpeciesComponent } from './components/species/species.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { PlanetsComponent } from './components/planets/planets.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FilmsComponent,
    CharactersComponent,
    SpeciesComponent,
    StarshipsComponent,
    VehiclesComponent,
    PlanetsComponent
  ],
  imports: [
    AppRoutingModule,
    ImportsMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
