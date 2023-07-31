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

  getEntrepots(): Observable<any[]> {
    return this.entrepotsCollection.snapshotChanges();
  }

  getEntrepotParId(id: string) {
    return this.entrepotsCollection.doc(id).valueChanges();
  }

  ajouterEntrepot(entrepot: any): Promise<DocumentReference<any>> {
    return this.entrepotsCollection.add(entrepot);
  }

  mettreAJourEntrepot(id: string, nouvelleValeur: any): Promise<void> {
    return this.entrepotsCollection.doc(id).update(nouvelleValeur);
  }

  supprimerEntrepot(id: string): Promise<void> {
    return this.entrepotsCollection.doc(id).delete();
  }


}
