class Pacijent {
  constructor(ime, visina, tezina) {
    this.ime = ime;
    this.visina = visina;
    this.tezina = tezina;
  }

  // IME ==========================================================

  get ime() {
    return this._ime;
  }
  set ime(i) {
    if (i.length > 0) {
      this._ime = i;
    } else {
      this._ime = "Name";
    }
  }
  // VISINA ======================================================

  get visina() {
    return this._visina;
  }
  set visina(v) {
    if (v > 0 && v < 250) {
      this._visina = v;
    } else {
      this._visina = 175;
    }
  }
  // TEZINA ======================================================

  get tezina() {
    return this._tezina;
  }
  set tezina(t) {
    if (t > 0 && t < 550) {
      this._tezina = t;
    } else {
      this._tezina = 70;
    }
  }
  // METODE ================================================================
  // =======================================================================
  // STAMPAJ =================================
  Stampaj() {
    console.log(this); // ???
  }
  // STAMPAJ LISTU ===================================================
  StampajListu() {
    let htmlLista = `<ul>
        <li>Ime: ${this.ime}</li>
        <li>Visina: ${this.visina}</li>
        <li>Tezina: ${this.tezina}</li>
      </ul>`;
    return htmlLista;
  }
  // BMI ========================================================
  Bmi() {
    return this._tezina / Math.pow(this._visina, 2);
  }
  // KRITICAN ===============================================
  Kritican() {
    if (this.Bmi() < 15 || this.Bmi() > 40) {
      console.log(this.Bmi());
      return true;
    } else {
      console.log(this.Bmi());
      return false;
    }
  }
}

export { Pacijent };
