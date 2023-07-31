import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MenuItem, MessageService} from "primeng/api";
import {Entrepot} from "../../../ricva-shared/models/entrepot.model";
import {EntrepotsService} from "../../../ricva-shared/services/entrepots.service";
import { Router } from '@angular/router';

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

  constructor(private entrepotService: EntrepotsService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService,
              private router: Router) {

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
   this.entrepotService.getEntrepots().subscribe((entrepots) => {
     this.entrepots = entrepots.map(entrepot => {
       const data = entrepot.payload?.doc?.data() as Entrepot;
       data.id = entrepot.payload?.doc?.id;
       return data;
     });     
   });
  }

  modifierEntrepot(entrepot: Entrepot) {
    this.router.navigate([`/admin/formulaire-entrepot/${entrepot.id}`]);
  }

  supprimerEntrepot(entrepot: Entrepot) {
    this.confirmationService.confirm({
      message: `Voulez-vous supprimer l\'entrepôt ${entrepot.libelle}?`,
      header: 'Suppression d\'un entrepôt',
      acceptButtonStyleClass: 'p-button-secondary',
      acceptLabel: 'supprimer',
      rejectLabel: 'annuler',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.entrepotService.supprimerEntrepot(entrepot.id)
            .then(() => {
              this.messageService.add({
                severity: 'success',
                summary: 'Succès',
                detail: `Entrepôt ${entrepot.libelle} supprimé.`
              });
              this.recupererListeEntrepot();
            })
            .catch(() => {
              this.messageService.add({
                severity: 'error',
                summary: 'Echec',
                detail: `Impossible de supprimer l'entrepôt ${entrepot.libelle}.`
              });
            });
      }
    });
  }
}
