import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GasStationlistComponent } from './components/gas-stationlist/gas-stationlist.component';
import { MapComponent } from './components/map/map.component';
import { MunicipalitiesComponent } from './components/municipalities/municipalities.component';

const routes: Routes = [
  {path: '', component: GasStationlistComponent},
  {path: 'muni', component: MunicipalitiesComponent},
  {path: 'map', component: MapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
