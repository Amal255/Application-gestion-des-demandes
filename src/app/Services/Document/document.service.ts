import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Document } from 'src/app/Models/Document/document';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private URL="http://localhost:8081/SpringMVC/servlet/Document";
  constructor(private httpClient:HttpClient) { }

  getListeDocument(): Observable<Document[]>{
    return this.httpClient.get<Document[]>(`${this.URL}`);
  }
}
