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
    RippleModule
  ]
})
export class AuthentificationModule {
}
