import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserComponent } from './components/new-user/new-user.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  //Aquí van las rutas:
  {path: 'user-list', component: UserListComponent},
  {path: 'new-user', component: NewUserComponent},
  {path: '', redirectTo: '/user-list', pathMatch: 'full'}
  //{path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
