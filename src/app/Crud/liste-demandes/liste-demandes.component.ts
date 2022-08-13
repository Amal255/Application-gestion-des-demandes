import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{Demande} from 'src/app/Models/Demande/demande';
import { DemandeService } from 'src/app/Services/Demandes/demande.service';

@Component({
  selector: 'app-liste-demandes',
  templateUrl: './liste-demandes.component.html',
  styleUrls: ['./liste-demandes.component.css']
})
export class ListeDemandesComponent implements OnInit {

demandes:Demande[];

  constructor(private demandeService:DemandeService,private router:Router) { }

  ngOnInit(): void {

    this.getDemandes();
  }

  private getDemandes(){
    this.demandeService.getListeDemande().subscribe(data=>{
      console.log(data);
      this.demandes=data;

    });
  }
  deleteDemande(id_demande: number){
    this.demandeService.deleteDemande(id_demande).subscribe( data => {
      console.log(data);
      this.getDemandes();
    })
  }
  Ajouterdmd(){
    this.router.navigate(['/ajouterdemande'])
  }

}
