import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Demande } from 'src/app/Models/Demande/demande';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {


  private baseURL="http://localhost:8081/SpringMVC/servlet/AddDemandes";
  private URL="http://localhost:8081/SpringMVC/servlet/Demande";
  private URL2="http://localhost:8081/SpringMVC/servlet/DeleteDemande";

  constructor(private httpClient:HttpClient) { }

    getListeDemande(): Observable<Demande[]>{
      return this.httpClient.get<Demande[]>(`${this.URL}`);
    }

    createDemande(demande: Demande): Observable<Object>{
      return this.httpClient.post(`${this.baseURL}`, demande);
    }
    
    deleteDemande(id: number): Observable<Object>{
      return this.httpClient.delete(`${this.URL2}/${id}`);
    }
}

