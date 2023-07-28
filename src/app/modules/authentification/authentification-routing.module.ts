import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';

const routes: Routes = [
    {
        path: '',
        component: AuthentificationComponent,
        children: [
            {
                path: '',
                redirectTo: 'connexion',
                pathMatch: 'full'
            },
            {
                path: 'inscription',
                component: InscriptionComponent
            },
            {
                path: 'connexion',
                component: ConnexionComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthentificationRoutingModule { }
