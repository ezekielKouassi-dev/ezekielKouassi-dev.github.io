import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import firebase from "firebase/compat";
import { Observable } from "rxjs";
import auth = firebase.auth;

@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {

  constructor(private afAuth: AngularFireAuth) {
  }

  inscription(email: string, motDePasse: string): Promise<auth.UserCredential> {
    return this.afAuth.createUserWithEmailAndPassword(email, motDePasse);
  }

  connexion(email: string, motDePasse: string): Promise<auth.UserCredential> {
    return this.afAuth.signInWithEmailAndPassword(email, motDePasse);
  }

  deconnexion(): Promise<void> {
    return this.afAuth.signOut();
  }

  getEtatAuth(): Observable<firebase.User | null> {
    return this.afAuth.authState;
  }
}
