import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImportsMaterialModule } from './imports-material/imports-material.module';
import { ActorListComponent } from './components/actor-list/actor-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ActorDetailsComponent } from './components/actor-list/actor-details/actor-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ActorListComponent,
    ActorDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ImportsMaterialModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
