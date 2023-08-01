import {Component, OnInit} from '@angular/core';
import {UtilisateursService} from "../../../ricva-shared/services/utilisateurs.service";
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit{
  loading: boolean = false;
  formulaireInscription: FormGroup;

  constructor(private utilisateurService: UtilisateursService,
    private formBuilder: FormBuilder,
    private router: Router,
    private messageService: MessageService) {
  }

  ngOnInit() {
    this.formulaireInscription = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      motDePasse: [null, Validators.required],
      confirmerMotDePasse: [null, Validators.required]
    });

    this.inscription();
  }

  inscription() {
    if (this.formulaireInscription.valid) {
      this.loading = true;
      this.utilisateurService.inscription(this.formulaireInscription.value.email, this.formulaireInscription.value.motDePasse)
        .then((result) => {
          // L'utilisateur a été inscrit avec succès
          this.messageService.add({
            severity: 'success',
            summary: 'Succès',
            detail: 'Inscription réussite!'
          });
          setTimeout(() => {
            this.router.navigate(['/connexion']); 
            this.loading = false;
          }, 1000);
        })
        .catch((error) => {
          // Une erreur s'est produite lors de l'inscription
          this.messageService.add({
            severity: 'error',
            summary: 'Echec',
            detail: 'Impossible de s\'inscrire, veuillez réessayer!'
          });
          this.loading = false;
        });
    }
  }

  isAfficherFeedBackError(formControl: AbstractControl, isSubmit: boolean): boolean {
    return (formControl.invalid && (formControl.dirty || formControl.touched)) || (formControl.invalid && isSubmit);
  }
}
