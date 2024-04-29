import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
 import { Router } from '@angular/router';
 import { DataService } from '../data.service';
@Component({
  selector: 'app-information-medicament',
  templateUrl: './information-medicament.component.html',
  styleUrls: ['./information-medicament.component.css']
})
export class InformationMedicamentComponent implements OnInit  {
  // Vos propriétés et méthodes ici


  nomPatient: string = '';
 
 // Tableau pour stocker les informations sur les médicaments

  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) { }

  medicaments = [
    { nom: 'Nom du médicament 1', dateAchat: '01/04/2024', nombrePieces: 10, prix: 15.99 },
    { nom: 'Nom du médicament 2', dateAchat: '02/04/2024', nombrePieces: 8, prix: 12.99 },
    { nom: 'Nom du médicament 3', dateAchat: '03/04/2024', nombrePieces: 5, prix: 8.99 }
  ];


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.nomPatient = params['nomPatient'];
      this.medicaments = this.dataService.getMedicamentsByPatient(this.nomPatient);
  
    });
  }
  retournerPagePersonnel() {
    this.router.navigate(['/personnel']);
  }
 getTotalPrix(): number {
    let totalPrix = 0;
    this.medicaments.forEach(medicament => {
      totalPrix += medicament.prix * medicament.nombrePieces;
    });
    return totalPrix;
  }
}
