export class Entrepot {
  id: number;
  libelle: string;
  superficie: number;
  placer: string;

  constructor(id: number, libelle : string, superficie : number, placer : string) {
    this.id = id;
    this.libelle = libelle;
    this.superficie = superficie;
    this.placer = placer;
  }
}
