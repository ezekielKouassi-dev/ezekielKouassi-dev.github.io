import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MenuItem} from "primeng/api";

@Component({
  selector: 'app-formulaire-entrepot',
  templateUrl: './formulaire-entrepot.component.html',
  styleUrls: ['./formulaire-entrepot.component.scss']
})
export class FormulaireEntrepotComponent implements OnInit{
  items: MenuItem[];

  ngOnInit(): void {
    this.items = [
      {label:'Tableau de bord'},
      {label:'Administration'},
      {label: 'Opérations'},
      {label: 'Créer un entrepôt'}
    ];
  }
}
