import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { AuthentificationComponent } from './Components/authentification/authentification.component';
import { EtudiantComponent } from './Components/etudiant/etudiant.component';
import { HttpClientModule } from '@angular/common/http';
import { ListeDemandesComponent } from './Crud/liste-demandes/liste-demandes.component';
import { AjouterEtudiantComponent } from './Crud/ajouter-etudiant/ajouter-etudiant.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AjouterDemandeComponent } from './Crud/ajouter-demande/ajouter-demande.component';
import { LesDemandesComponent } from './Crud/les-demandes/les-demandes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthentificationComponent,
    EtudiantComponent,
    ListeDemandesComponent,
    AjouterEtudiantComponent,
    AjouterDemandeComponent,
    LesDemandesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
