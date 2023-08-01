import { Component } from '@angular/core';
import { UtilisateursService } from '../../services/utilisateurs.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private utilisateurService: UtilisateursService,
    private router: Router,
    private messageService: MessageService) {}

  logout() {
    this.utilisateurService.deconnexion()
    .then(() => {
      this.router.navigate(['/auth/connexion']);
    })
    .catch(() => {
      this.messageService.add({
        severity: 'error',
        summary: 'Echec',
        detail: 'Impossible de se deconnecter'
      })
    });
  }
}
