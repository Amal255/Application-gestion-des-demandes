import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  root=true;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  goToDemade(){
    this.route.navigate(['/liste-demande'])
  }

}
