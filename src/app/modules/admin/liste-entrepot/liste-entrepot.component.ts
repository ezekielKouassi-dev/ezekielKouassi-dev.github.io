import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-liste-entrepot',
  templateUrl: './liste-entrepot.component.html',
  styleUrls: ['./liste-entrepot.component.scss']
})
export class ListeEntrepotComponent implements OnInit{
  items: MenuItem[];
  menuSelectionne: number = 5;
  ngOnInit(): void {
    this.items = [
      {label:'Tableau de bord'},
      {label:'Administration'}
    ];
  }

}
