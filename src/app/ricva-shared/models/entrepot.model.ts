export class Entrepot {
  id: string;
  libelle: string;
  superficie: number;
  placer: string;

  constructor(id: string, libelle : string, superficie : number, placer : string) {
    this.id = id;
    this.libelle = libelle;
    this.superficie = superficie;
    this.placer = placer;
  }
}
