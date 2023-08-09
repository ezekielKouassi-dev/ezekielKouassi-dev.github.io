import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-liste-speculation',
  templateUrl: './liste-speculation.component.html',
  styleUrls: ['./liste-speculation.component.scss']
})
export class ListeSpeculationComponent {

  constructor(private router: Router) {}

  // liste des icons pour les spéculations.
  speculations: any[] = [
    {
      label: 'cajoux',
      icon: './../../../../../assets/img/icons8-noix-16.png'
    },
    {
      label: 'cacao',
      icon: './../../../../../assets/img/icons8-cacao-flaticons-lineal-color-16.png'
    },
    {
      label: 'hévéa',
      icon: './../../../../../assets/img/icons8-asperges-16.png'
    },
    {
      label: 'karité',
      icon: './../../../../../assets/img/icons8-beurre-16.png'
    }
  ];

  /**
   * Vérifie si nous sommes sur la page des entrepôts.
   * @returns true si nous sommes sur la pages de la liste des entrepôts.
   */
  isListeEntrepot(): boolean {
    return this.router.url.includes('/liste-entrepot');
  }

  /**
   * Vérifie si nous sommes sur la page de connexion.
   * @returns True si nous sommes sur la page de connexion.
   */
  isConnexion(): boolean {
    return this.router.url.includes('/auth/connexion');
  }
}
