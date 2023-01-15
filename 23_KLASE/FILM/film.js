class Film {
  #naslov;
  #reziser;
  #godinaIzdanja;
  // nije jos uvek standard, taraba sluzi za onemogucavanje menjanje sadrzaja van klase

  constructor(naslov, reziser, godinaIzdanja, ocene) {
    this.naslov = naslov;
    this.reziser = reziser;
    this.godinaIzdanja = godinaIzdanja;
    this.ocene = ocene;
  }

  stampaj() {
    console.log(`${this.naslov} - ${this.reziser} - ${this.godinaIzdanja}`);
  }

  // NASLOV===================================================================

  get naslov() {
    return this.#naslov;
  }

  set naslov(n) {
    if (n.length > 0) {
      this.#naslov = n;
    } else {
      this.#naslov = "Film";
    }
  }

  // REZISER=============================================================

  get reziser() {
    return this.#reziser;
  }

  set reziser(r) {
    if (r.length > 0) {
      this.#reziser = r;
    } else {
      this.#reziser = "John Doe";
    }
  }

  // GODINA IZDANJA=============================================================

  get godinaIzdanja() {
    return this.#godinaIzdanja;
  }

  set godinaIzdanja(g) {
    if (g < 1800) {
      this.#godinaIzdanja = 1800;
    } else {
      this.#godinaIzdanja = g;
    }
  }

  // OCENE=======================================================================
  get ocene() {
    return this._ocene;
  }
  set ocene(o) {
    if (Array.isArray(o)) {
      this._ocene = o;
    } else {
      this._ocene = [];
    }
  }
  // PROSEK=======================================================================
  prosek() {
    let acc = 0;
    this.ocene.forEach((el) => {
      acc += el;
    });
    return acc / this.ocene.length;
  }
}

export { Film };
