import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin.component";
import {ListeEntrepotComponent} from "./liste-entrepot/liste-entrepot.component";

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
