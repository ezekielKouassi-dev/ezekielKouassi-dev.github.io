import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthentificationComponent} from './authentification.component';
import {AuthentificationRoutingModule} from './authentification-routing.module';
import {ConnexionComponent} from './connexion/connexion.component';
import {InscriptionComponent} from './inscription/inscription.component';
import {CarouselModule} from 'primeng/carousel';
import {RicvaSharedModule} from 'src/app/ricva-shared/ricva-shared.module';
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import { MessageService } from 'primeng/api';
import { MessageModule } from 'primeng/message';


@NgModule({
  declarations: [
    AuthentificationComponent,
    ConnexionComponent,
    InscriptionComponent
  ],
  exports: [
    AuthentificationComponent,
    ConnexionComponent,
    InscriptionComponent
  ],
  imports: [
    CommonModule,
    AuthentificationRoutingModule,
    CarouselModule,
    RicvaSharedModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    RippleModule,
    ReactiveFormsModule,
    FormsModule,
    ProgressSpinnerModule,
    MessageModule
  ],
  providers: [
    MessageService
  ]
})
export class AuthentificationModule {
}
