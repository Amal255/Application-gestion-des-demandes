import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Demande } from 'src/app/Models/Demande/demande';
import { Document } from 'src/app/Models/Document/document';

import { DemandeService } from 'src/app/Services/Demandes/demande.service';
import { DocumentService } from 'src/app/Services/Document/document.service';

@Component({
  selector: 'app-ajouter-demande',
  templateUrl: './ajouter-demande.component.html',
  styleUrls: ['./ajouter-demande.component.css']
})
export class AjouterDemandeComponent implements OnInit {


documents: Document[];
Formulaire:FormGroup;
demande:Demande= new Demande();

  constructor(private router:Router,private demandeService:DemandeService,private documentService:DocumentService) { }

  ngOnInit(): void {
    this.getDocument();
    this.Formulaire = new FormGroup({
      
    })
  }
  private getDocument(){
    this.documentService.getListeDocument().subscribe(data=>{
      console.log(data);
      this.documents=data;

    });
  }


  gotodemande(){
    this.router.navigate(['/liste-demande'])
  }

  Adddemande(){
    this.demandeService.createDemande(this.demande).subscribe(data =>{
  console.log(data);
  this.gotodemande();
    },
    error=> console.log(error));
    
  }
  onSubmit(){
    console.log(this.demande);
    

  }

}
