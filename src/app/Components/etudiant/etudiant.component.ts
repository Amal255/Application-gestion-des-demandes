import { Component, OnInit } from '@angular/core';
import { EtudiantService } from 'src/app/Services/Etudiant/etudiant.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  public EtudiantList :String[]=[];

  
  constructor(private etudiantServive:EtudiantService) { }

  ngOnInit(): void {
   
  }

 
}
