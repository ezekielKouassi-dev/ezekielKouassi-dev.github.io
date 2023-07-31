import {Component, OnInit} from '@angular/core';
import {UtilisateursService} from "../../../ricva-shared/services/utilisateurs.service";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit{
  email: string = 'ekouassi@gmail.com';
  motDePasse: string = 'azerty';

  constructor(private utilisateurService: UtilisateursService) {
  }

  ngOnInit() {
    this.inscription();
  }

  inscription() {
    this.utilisateurService.inscription(this.email, this.motDePasse)
        .then((result) => {
          // L'utilisateur a été inscrit avec succès
          console.log('Utilisateur inscrit avec succès:', result.user);
        })
        .catch((error) => {
          // Une erreur s'est produite lors de l'inscription
          console.error('Erreur lors de l\'inscription:', error);
        });
  }
}
