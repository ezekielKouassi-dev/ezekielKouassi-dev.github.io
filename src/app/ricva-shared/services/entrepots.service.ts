import {Injectable, OnInit} from '@angular/core';
import {Entrepot} from "../models/entrepot.model";
import {AngularFirestore, AngularFirestoreCollection, DocumentReference} from "@angular/fire/compat/firestore";
import firebase from "firebase/compat";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EntrepotsService implements OnInit{
  private entrepotsCollection: AngularFirestoreCollection<any>;
  entrepots: Entrepot[];
  constructor(private firestore : AngularFirestore) {
    this.entrepotsCollection = firestore.collection('entrepot-collection');
  }

  ngOnInit(): void {

  }

  /**
   * Retourne la liste des entrepôts.
   */
  listeEntrepots() : Entrepot[] {
    return this.entrepots;
  }

  /**
   * Permet d'avoir la liste des entrepôts.
   */
  getEntrepots(): Observable<any[]> {
    return this.entrepotsCollection.snapshotChanges();
  }

  /**
   * Récupère un entrepôt par son id.
   * @param id l'identifiant de l'entrepôt.
   * @returns l'enteprôt correspondant.
   */
  getEntrepotParId(id: string) {
    return this.entrepotsCollection.doc(id).valueChanges();
  }

  /**
   * Crèe un entrepôt.
   * @param entrepot l'entrepôt qu'on souhaite ajouter.
   * @returns une promesse contenant la reference du document.
   */
  ajouterEntrepot(entrepot: any): Promise<DocumentReference<any>> {
    return this.entrepotsCollection.add(entrepot);
  }

  /**
   * 
   * @param id l'identifiant de l'entrepôt qu'on souhaite modifier.
   * @param nouvelleValeur les valeurs qu'on souhaite modifier.
   * @returns void.
   */
  mettreAJourEntrepot(id: string, nouvelleValeur: any): Promise<void> {
    return this.entrepotsCollection.doc(id).update(nouvelleValeur);
  }

  /**
   * 
   * @param id l'identifiant de l'entrepot qu'on souhaite supprimer.
   * @returns void.
   */
  supprimerEntrepot(id: string): Promise<void> {
    return this.entrepotsCollection.doc(id).delete();
  }


}
