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
import {TableModule} from "primeng/table";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import { FormulaireEntrepotComponent } from './formulaire-entrepot/formulaire-entrepot.component';
import {StyleClassModule} from "primeng/styleclass";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ConfirmationService, MessageService} from "primeng/api";
import {MessageModule} from "primeng/message";
import {ToastModule} from "primeng/toast";

@NgModule({
  declarations: [
    AdminComponent,
    ListeEntrepotComponent,
    FormulaireEntrepotComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RicvaSharedModule,
    BreadcrumbModule,
    ButtonModule,
    RippleModule,
    BadgeModule,
    BadgeModule,
    TableModule,
    InputTextModule,
    FormsModule,
    StyleClassModule,
    ConfirmDialogModule,
    MessageModule,
    ToastModule
  ],
  providers : [
      ConfirmationService,
    MessageService
  ]
})
export class AdminModule { }
