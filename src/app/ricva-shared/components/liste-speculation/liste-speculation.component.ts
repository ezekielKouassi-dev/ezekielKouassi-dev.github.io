import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-liste-speculation',
  templateUrl: './liste-speculation.component.html',
  styleUrls: ['./liste-speculation.component.scss']
})
export class ListeSpeculationComponent {

  constructor(private router: Router) {}
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

  isListeEntrepot(): boolean {
    return this.router.url.includes('/liste-entrepot');
  }

  isConnexion(): boolean {
    return this.router.url.includes('/auth/connexion');
  }
}
