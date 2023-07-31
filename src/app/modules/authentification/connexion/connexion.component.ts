import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UtilisateursService} from "../../../ricva-shared/services/utilisateurs.service";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit{
  email: string = 'ekouassi@gmail.com';
  motDePasse: string = 'azerty';
  formulaireConnexion: FormGroup;
  loading: boolean = false;

  constructor(private route: Router,
              private utilisateurService: UtilisateursService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.formulaireConnexion = this.formBuilder.group({
      email: [null, Validators.required],
      motDePasse: [null, Validators.required]
    });
  }

  goToAdmin(): void {
    if (this.formulaireConnexion.valid) {
      this.loading = true;
      this.connexion();
    }
  }

  connexion() {
    this.utilisateurService.connexion(this.formulaireConnexion.value.email, this.formulaireConnexion.value.motDePasse)
        .then((result) => {
          // L'utilisateur s'est connecté avec succès
          this.route.navigate(['/admin']);
          this.loading = false;
        })
        .catch((error) => {
          // Une erreur s'est produite lors de la connexion
          console.error('Erreur lors de la connexion:', error);
          this.loading = false;
        });
  }

  isAfficherFeedBackError(formControl: AbstractControl, isSubmit: boolean): boolean {
    return (formControl.invalid && (formControl.dirty || formControl.touched)) || (formControl.invalid && isSubmit);
  }

}
