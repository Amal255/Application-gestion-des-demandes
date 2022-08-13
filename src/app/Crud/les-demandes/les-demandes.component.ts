import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/Models/Etudiant/etudiant';
import { EtudiantService } from 'src/app/Services/Etudiant/etudiant.service';

@Component({
  selector: 'app-les-demandes',
  templateUrl: './les-demandes.component.html',
  styleUrls: ['./les-demandes.component.css']
})
export class LesDemandesComponent implements OnInit {
  etudiants:Etudiant[];

  constructor(private etudiantService:EtudiantService,private route:Router) { }

  ngOnInit(): void {
    this.getEtudiant();
  }
  private getEtudiant(){
    this.etudiantService.getListeDemande().subscribe(data=>{
      console.log(data);
      this.etudiants=data;

    });
  }
}
