import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesplegableListComponent } from './components/desplegable-list/desplegable-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'pokemons', pathMatch: 'full'},
  {path: 'pokemons', component: DesplegableListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
