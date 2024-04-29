import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { PersonnelComponent } from './component/personnel/personnel.component';
import { ResidentsComponent } from './component/residents/residents.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PharmacieComponent } from './component/pharmacie/pharmacie.component';
import { RadiologComponent } from './component/radiolog/radiolog.component';
import { LaboratoireComponent } from './component/laboratoire/laboratoire.component';
import { KineComponent } from './component/kine/kine.component';
import { MedecinsComponent } from './component/medecins/medecins.component';
import { LoisirsComponent } from './component/loisirs/loisirs.component';
import { FraisOSPISComponent } from './component/frais-ospis/frais-ospis.component';

import { RouterModule } from '@angular/router';
import { InformationMedicamentComponent } from './information-medicament/information-medicament.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    PersonnelComponent,
    ResidentsComponent,
    DashboardComponent,
    PharmacieComponent,
    RadiologComponent,
    LaboratoireComponent,
    KineComponent,
    MedecinsComponent,
    LoisirsComponent,
    FraisOSPISComponent,
    InformationMedicamentComponent ,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
