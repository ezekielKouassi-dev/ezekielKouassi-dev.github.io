import {Injectable, OnInit} from '@angular/core';
import {Entrepot} from "../models/entrepot.model";

@Injectable({
  providedIn: 'root'
})
export class EntrepotsService implements OnInit{
  entrepots: Entrepot[];
  constructor() { }

  ngOnInit(): void {

  }

  /**
   * Retourne la liste des entrepôts.
   */
  listeEntrepots() : Entrepot[] {
    this.entrepots = [
      new Entrepot(1, 'ACIPAC YOP', 3000, 'YOP ZONE INDUSTRIELLE'),
      new Entrepot(2, 'ACIPAC YOP', 3000, 'YOP ZONE INDUSTRIELLE'),
      new Entrepot(3, 'ACIPAC YOP', 3000, 'YOP ZONE INDUSTRIELLE')
    ];
    return this.entrepots;
  }
}
