import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImportsMaterialModule } from './imports-material/imports-material.module';
import { DesplegableListComponent } from './components/desplegable-list/desplegable-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DesplegableListComponent
  ],
  imports: [
    FormsModule,
    ImportsMaterialModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
