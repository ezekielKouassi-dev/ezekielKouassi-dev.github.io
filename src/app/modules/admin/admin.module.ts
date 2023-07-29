import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {AdminRoutingModule} from "./admin-routing.module";
import {RicvaSharedModule} from "../../ricva-shared/ricva-shared.module";
import { ListeEntrepotComponent } from './liste-entrepot/liste-entrepot.component';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {BadgeModule} from "primeng/badge";

@NgModule({
  declarations: [
    AdminComponent,
    ListeEntrepotComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RicvaSharedModule,
    BreadcrumbModule,
    ButtonModule,
    RippleModule,
    BadgeModule,
    BadgeModule
  ]
})
export class AdminModule { }
