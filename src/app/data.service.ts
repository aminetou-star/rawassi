import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    private totalPrix: number = 0;
  constructor() { }

  setTotalPrix(totalPrix: number) {
    this.totalPrix = totalPrix;
  }

  getTotalPrix() {
    return this.totalPrix;
  }

  // Méthode pour récupérer les informations sur les médicaments pour un patient spécifique
  getMedicamentsByPatient(nomPatient: string): any[] {
    // Implémentez la logique pour récupérer les données des médicaments ici
    // Par exemple, vous pouvez simuler des données pour le moment
    return [
      { nom: 'Médicament 1', dateAchat: '01/04/2024', nombrePieces: 10, prix: 15.99 },
      { nom: 'Médicament 2', dateAchat: '02/04/2024', nombrePieces: 5, prix: 10.99 },
      // Ajoutez d'autres données de médicaments si nécessaire
    ];
  }
}
