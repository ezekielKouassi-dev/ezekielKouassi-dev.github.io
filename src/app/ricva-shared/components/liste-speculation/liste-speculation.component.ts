import { Component } from '@angular/core';

@Component({
  selector: 'app-liste-speculation',
  templateUrl: './liste-speculation.component.html',
  styleUrls: ['./liste-speculation.component.scss']
})
export class ListeSpeculationComponent {
  speculations: any[] = [
    {
      label: 'cajoux'
    },
    {
      label: 'cacao'
    },
    {
      label: 'hévéa'
    },
    {
      label: 'karité'
    }
  ];
}
