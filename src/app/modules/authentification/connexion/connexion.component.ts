import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent {
  constructor(private route: Router) {
  }

  goToAdmin(): void {
    this.route.navigate(['admin/liste-entrepot']);
  }
}
