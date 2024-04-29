import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laboratoire',
  templateUrl: './laboratoire.component.html',
  styleUrls: ['./laboratoire.component.css']
})
export class LaboratoireComponent implements OnInit {

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
export class AppComponent {
  medicament = {
    nom: 'Nom du médicament',
    dateAchat: '01/04/2024',
    nombrePieces: 10,
    prix: 15.99
  };
  
  consulterMedicament() {
    // Cette fonction sera appelée lorsqu'on clique sur le bouton "Consulter"
    alert(`
      Nom du médicament : ${this.medicament.nom}
      Date d'achat : ${this.medicament.dateAchat}
      Nombre de pièces achetées : ${this.medicament.nombrePieces}
      Prix : ${this.medicament.prix} euros
    `);
  }
}
