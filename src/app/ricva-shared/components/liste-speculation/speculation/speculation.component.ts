import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-speculation',
  templateUrl: './speculation.component.html',
  styleUrls: ['./speculation.component.scss']
})
export class SpeculationComponent {
  @Input() label: string;
  @Input() icon: string;
}
