import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonnelComponent } from './component/personnel/personnel.component';
import { ResidentsComponent } from './component/residents/residents.component';
import { FraisOSPISComponent } from './component/frais-ospis/frais-ospis.component';
import { KineComponent } from './component/kine/kine.component';
import { LaboratoireComponent } from './component/laboratoire/laboratoire.component';
import { LoisirsComponent } from './component/loisirs/loisirs.component';
import { MedecinsComponent } from './component/medecins/medecins.component';
import { PharmacieComponent } from './component/pharmacie/pharmacie.component';
import { RadiologComponent } from './component/radiolog/radiolog.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { InformationMedicamentComponent } from './information-medicament/information-medicament.component';

const routes: Routes = [
  {path : "personnel",component : PersonnelComponent},
  {path : "residents",component : ResidentsComponent},
  {path : "frais-ospis",component :FraisOSPISComponent},
  {path : "kine",component : KineComponent},
  {path : "laboratoire",component : LaboratoireComponent},
  {path : "loisirs",component : LoisirsComponent},
  {path : "medecins",component : MedecinsComponent},
  {path : "pharmacie",component : PharmacieComponent},
  {path : "radiolog",component : RadiologComponent},
  {path : "dashboard",component : DashboardComponent},
{ path: 'information-medicament', component: InformationMedicamentComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
