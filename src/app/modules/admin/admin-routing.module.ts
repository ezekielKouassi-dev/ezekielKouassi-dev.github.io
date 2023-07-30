import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin.component";
import {ListeEntrepotComponent} from "./liste-entrepot/liste-entrepot.component";
import {FormulaireEntrepotComponent} from "./formulaire-entrepot/formulaire-entrepot.component";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'liste-entrepot',
        pathMatch: 'full'
      },
      {
        path: 'liste-entrepot',
        component: ListeEntrepotComponent
      },
      {
        path: 'formulaire-entrepot',
        component: FormulaireEntrepotComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
