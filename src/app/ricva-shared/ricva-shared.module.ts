import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpeculationComponent} from './components/liste-speculation/speculation/speculation.component';
import {ListeSpeculationComponent} from './components/liste-speculation/liste-speculation.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {BadgeModule} from 'primeng/badge';
import { HeaderComponent } from './components/header/header.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    SpeculationComponent,
    ListeSpeculationComponent,
    HeaderComponent
  ],
  exports: [
    ListeSpeculationComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    BadgeModule,
      ReactiveFormsModule
  ]
})
export class RicvaSharedModule {
}
