import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GasStationlistComponent } from './components/gas-stationlist/gas-stationlist.component';

const routes: Routes = [
  {path: '', component: GasStationlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
