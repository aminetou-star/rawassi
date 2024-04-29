import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-residents',
  templateUrl: './residents.component.html',
  styleUrls: ['./residents.component.css']
})
export class ResidentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  etatBouton: string = 'Payé';
  etatBou: string = 'Payé';
  etat: string = 'Payé';

  changerEtatBouton(event: Event) {
    event.preventDefault();
    this.etatBouton = (this.etatBouton === 'Payé') ? 'En attente' : 'Payé';
}

changerEtatBou(event: Event) {
    event.preventDefault();
    this.etatBou = (this.etatBou === 'Payé') ? 'En attente' : 'Payé';
}

changerEtat(event: Event) {
    event.preventDefault();
    this.etat = (this.etat === 'Payé') ? 'En attente' : 'Payé';
}
}
