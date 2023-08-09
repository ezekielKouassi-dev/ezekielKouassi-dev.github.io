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

  /**
   * Permet de faire l'inscription de l'utilisateur.
   * @param email l'email de l'utilisateur.
   * @param motDePasse le mot de passe.
   * @returns le token de connexion.
   */
  inscription(email: string, motDePasse: string): Promise<auth.UserCredential> {
    return this.afAuth.createUserWithEmailAndPassword(email, motDePasse);
  }

  /**
   * Permet s'authentifier au-près de firebase authentification.
   * @param email le mail de connexion.
   * @param motDePasse le mot de passe.
   * @returns le token de connexion.
   */
  connexion(email: string, motDePasse: string): Promise<auth.UserCredential> {
    return this.afAuth.signInWithEmailAndPassword(email, motDePasse);
  }

  /**
   * Faire la deconnexion au-près de firebase authentification.
   * @returns void.
   */
  deconnexion(): Promise<void> {
    return this.afAuth.signOut();
  }

  /**
   * Permet d'obtenir l'état d'authentification.
   * @returns {@link firebase.User}
   */
  getEtatAuth(): Observable<firebase.User | null> {
    return this.afAuth.authState;
  }
}
