import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Etudiant } from 'src/app/Models/Etudiant/etudiant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  private baseURL = 'http://localhost:8081/SpringMVC/servlet/AddEtudiant';
  private URL="http://localhost:8081/SpringMVC/servlet/Etudiant";
  

  constructor(private http:HttpClient) { }

   createEtudiant(etudiant:Etudiant) :Observable<Object>{
    return this.http.post(`${this.baseURL}`,etudiant);
   }

   getListeDemande(): Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>(`${this.URL}`);
  }
    
   
  }


