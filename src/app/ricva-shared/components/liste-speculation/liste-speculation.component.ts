import { Component } from '@angular/core';

@Component({
  selector: 'app-liste-speculation',
  templateUrl: './liste-speculation.component.html',
  styleUrls: ['./liste-speculation.component.scss']
})
export class ListeSpeculationComponent {
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
}
