import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {Entrepot} from "../../../ricva-shared/models/entrepot.model";
import {EntrepotsService} from "../../../ricva-shared/services/entrepots.service";

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-liste-entrepot',
  templateUrl: './liste-entrepot.component.html',
  styleUrls: ['./liste-entrepot.component.scss']
})
export class ListeEntrepotComponent implements OnInit{
  items: MenuItem[];
  menuSelectionne: number = 5;
  entrepots: Entrepot[];
  rechercher: string;
  cols!: Column[];

  constructor(private entrepotService: EntrepotsService) {

  }

  ngOnInit(): void {
    this.items = [
      {label:'Tableau de bord'},
      {label:'Administration'}
    ];

    this.cols = [
      { field: 'libelle', header: 'Libellé' },
      { field: 'superficie', header: 'Superficie M2' },
      { field: 'placer', header: 'Placer' },
      { field: 'action', header: 'Action' }
    ];

    this.recupererListeEntrepot();
  }


  /**
   * récupère la liste des entrepôts depuis le service.
   */
  recupererListeEntrepot() {
    this.entrepots = this.entrepotService.listeEntrepots();
  }

  modifierEntrepot(entrepot: Entrepot) {
    console.log('modification en cours', entrepot);
  }

  supprimerEntrepot(entrepot: Entrepot) {
    console.log('suppression en cours', entrepot);
  }
}
