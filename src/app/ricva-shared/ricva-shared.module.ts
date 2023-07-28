import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpeculationComponent} from './components/liste-speculation/speculation/speculation.component';
import {ListeSpeculationComponent} from './components/liste-speculation/liste-speculation.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {BadgeModule} from 'primeng/badge';


@NgModule({
  declarations: [
    SpeculationComponent,
    ListeSpeculationComponent
  ],
  exports: [
    ListeSpeculationComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    BadgeModule
  ]
})
export class RicvaSharedModule {
}
