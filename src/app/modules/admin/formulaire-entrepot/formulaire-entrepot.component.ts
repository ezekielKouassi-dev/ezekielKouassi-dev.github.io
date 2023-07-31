import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MenuItem, MessageService} from "primeng/api";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EntrepotsService} from "../../../ricva-shared/services/entrepots.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-formulaire-entrepot',
  templateUrl: './formulaire-entrepot.component.html',
  styleUrls: ['./formulaire-entrepot.component.scss']
})
export class FormulaireEntrepotComponent implements OnInit{
  items: MenuItem[];
  formulaireEntrepot: FormGroup;
  loading: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private entrepotService: EntrepotsService,
              private messageService: MessageService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.items = [
      {label:'Tableau de bord'},
      {label:'Administration'},
      {label: 'Opérations'},
      {label: 'Créer un entrepôt'}
    ];

    this.formulaireEntrepot = this.formBuilder.group({
      libelle: [null, Validators.required],
      longitude: [null, [Validators.required, Validators.nullValidator]],
      latitude: [null, [Validators.required, Validators.nullValidator]],
      superficie: [null, [Validators.required, Validators.nullValidator]],
      placer: [null, [Validators.required, Validators.nullValidator]],
    });

    const id = this.router.url.split('/').pop();

    if (id != 'formulaire-entrepot') {
      this.entrepotService.getEntrepotParId(id).subscribe((entrepot) => {
        this.formulaireEntrepot.patchValue({
          libelle: entrepot?.libelle,
          longitude: entrepot?.longitude,
          latitude: entrepot?.latitude,
          superficie: entrepot?.superficie,
          placer: entrepot?.placer
        });
      });
    }
  }

  enregistrerEntrepot() {
    if (this.formulaireEntrepot.valid) {
      this.loading = true;

		  const id = this.router.url.split('/').pop();
      
      if (id != 'formulaire-entrepot') {
        this.entrepotService.mettreAJourEntrepot(id, this.formulaireEntrepot.getRawValue())
        .then(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Succès',
            detail: 'Entrepôt mis à jour'
          });
          this.router.navigate(['/admin/liste-entrepot']);
          this.loading = false;
        })
        .catch(() => {
          this.messageService.add({
            severity: 'error',
            summary: 'Echec',
            detail: 'Erreur Impossible de modifier l\'enretrepôt'
          });
          this.loading = false;
        });
      } else {
        this.entrepotService.ajouterEntrepot(this.formulaireEntrepot.getRawValue())
          .then(() => {
            this.messageService.add({
              severity: 'success',
              summary: 'Succès',
              detail: 'Entrepôt enregistré'
            });
            this.router.navigate(['/admin/liste-entrepot']);
            this.loading = false;
          })
          .catch((error) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Echec',
              detail: 'Erreur Impossible d\'enregistrer l\'enretrepôt'
            });
            this.loading = false;
          });
      }
    } else {
      console.log(this.formulaireEntrepot.getRawValue())
    }
  }
}
