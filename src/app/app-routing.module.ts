import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './Components/authentification/authentification.component';
import { EtudiantComponent } from './Components/etudiant/etudiant.component';
import { HeaderComponent } from './Components/header/header.component';
import { AjouterDemandeComponent } from './Crud/ajouter-demande/ajouter-demande.component';
import { AjouterEtudiantComponent } from './Crud/ajouter-etudiant/ajouter-etudiant.component';
import { LesDemandesComponent } from './Crud/les-demandes/les-demandes.component';
import { ListeDemandesComponent } from './Crud/liste-demandes/liste-demandes.component';

const routes: Routes = [
  {path:'lesdemandes',component:LesDemandesComponent},
  {path:'ajouterdemande',component:AjouterDemandeComponent},
  {path:'header',component:HeaderComponent},
  {path:'liste-demande',component:ListeDemandesComponent},
  {path:'ajouterEtudiant',component:AjouterEtudiantComponent},
  {path:'etudiant',component:EtudiantComponent},
  {path:'authentification',component:AuthentificationComponent}
];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
