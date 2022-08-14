import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/Models/Etudiant/etudiant';
import { EtudiantService } from 'src/app/Services/Etudiant/etudiant.service';

@Component({
  selector: 'app-ajouter-etudiant',
  templateUrl: './ajouter-etudiant.component.html',
  styleUrls: ['./ajouter-etudiant.component.css']
})
export class AjouterEtudiantComponent implements OnInit {

  etudiant:Etudiant=new Etudiant();
  Formulaire:FormGroup;
  isLoggedIn=false;
  isLoginFailed = false;
  errorMessage = '';
  

  
  constructor(private etudiantService:EtudiantService,
    private router :Router) { }

  ngOnInit(): void {
    this.Formulaire = new FormGroup({
      login: new FormControl(),
      mdp: new FormControl(),
      nom: new FormControl(),
      prenom: new FormControl(),
      groupe: new FormControl(),
      matricule:new FormControl()
      
    })

  }

  AddEtudiant(){
  this.etudiantService.createEtudiant(this.etudiant).subscribe(data =>{
console.log(data);

  },
  error=> console.log(error));
  
}

goToEtudiantliste(){
this.router.navigate(['/liste-demande']);
}

onSubmit(){
    console.log(this.etudiant);
    this.etudiant.nom  = this.Formulaire.value.nom;
    this.etudiant.prenom  = this.Formulaire.value.prenom;
    this.etudiant.matricule=this.Formulaire.value.matricule;
    this.etudiant.login  = this.Formulaire.value.login;
    this.etudiant.mdp  = this.Formulaire.value.mdp;
    this.etudiant.groupe=this.Formulaire.value.groupe;
    this.isLoginFailed = false;
    this.isLoggedIn = true;
    

  }

}
