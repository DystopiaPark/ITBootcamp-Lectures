let dan = {
  datum: `2022/03/22`,
  kisa: false,
  sunce: false,
  oblacno: false,
  temperatura: [14, 22, 33, 37, 32, 24, 37],
  // 1. Određuje i vraća prosečnu temperaturu izmerenu tog dana.
  prosecnaTemperatura: function () {
    let zbir = 0;
    this.temperatura.forEach((el) => {
      zbir += el;
    });
    return zbir / this.temperatura.length;
  },
  // 2. Prebrojava i vraća koliko merenja je bilo sa natprosečnom temperaturom.
  brojNatprosecnih: function () {
    let br = 0;
    let prosecnaT = this.prosecnaTemperatura();
    this.temperatura.forEach((el) => {
      if (prosecnaT < el) {
        br++;
      }
    });
    return br;
  },
  // 3. Prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom.
  maksimalnaTemperatura: function () {
    let max = this.temperatura[0];
    this.temperatura.forEach((el) => {
      if (max < el) {
        max = el;
      }
    });
    return max;
  },
  brojMaksimalnih: function () {
    let br = 0;
    let max = this.maksimalnaTemperatura();
    this.temperatura.forEach((el) => {
      if (el == max) {
        br++;
      }
    });
    return br;
  },
  //   // 4. Prima dva parametra koji predstavljaju dve temperature. Potrebno je da
  // metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate
  // temperature (ne uključujući te dve vrednosti).
  vrednostIzmedju: function (par1, par2) {
    let br = 0;
    this.temperatura.forEach((el) => {
      if (el > par1 && el < par2) {
        br++;
      }
    });
    return br;
  },
  // 5. Vraća true ukoliko je u većini dana temperatura bila iznad proseka. U
  // suprotnom vraća false.
  vecinskiIznadProseka: function () {
    let vrednost = undefined;
    let natprosecni = this.brojNatprosecnih();
    if (natprosecni > this.temperatura.length / 2) {
      vrednost = true;
    } else {
      vrednost = false;
    }
    return vrednost;
  },
  // 6. Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana
  // nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u
  // suprotnom metod vraća false.
  ledenDan: function () {
    let vrednost = true;
    this.temperatura.forEach((el) => {
      if (el > 0) {
        vrednost = false;
      }
    });
    return vrednost;
  },
  // 7. Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog
  // dana nije iznosila ispod 24 stepena. Metod vraća true ukoliko je dan bio
  // tropski, u suprotnom vraća false.
  tropskiDan: function () {
    let vrednost = true;
    this.temperatura.forEach((el) => {
      if (el < 24) {
        vrednost = false;
      }
    });
    return vrednost;
  },
  // 8. Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća
  // od 8 stepeni. Metod vraća true ukoliko je dan bio nepovoljan, u suprotnom
  // vraća false.
  nepovoljanDan: function () {
    vrednost = false;
    for (i = 0; i < this.temperatura.length - 1; i++) {
      if (Math.abs(this.temperatura[i] - this.temperatura[i + 1]) > 8) {
        vrednost = true;
      }
    }
    return vrednost;
  },
  // Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo
  // oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano. Metod
  // vraća true ukoliko je dan bio neuobičajen, u suprotnom vraća false.
  neuobicajenDan: function () {
    vrednost = false;
    this.temperatura.forEach((el) => {
      if (
        (el < -5 && this.kisa == true) ||
        (el > 25 && this.oblacno == true) ||
        (this.kisa == true && this.oblacno == true && this.sunce == true)
      ) {
        vrednost = true;
      }
    });
    return vrednost;
  },
};
// [14, 22, 33, 37, 32, 24, 37],
console.log(dan.prosecnaTemperatura()); // 1. ZADATAK
console.log(dan.brojNatprosecnih()); // 2. ZADATAK
console.log(dan.brojMaksimalnih()); // 3. ZADATAK
console.log(dan.vrednostIzmedju(15, 55)); // 4. ZADATAK
console.log(dan.vecinskiIznadProseka()); // 5. ZADATAK
console.log(dan.ledenDan()); // 6. ZADATAK
console.log(dan.tropskiDan()); // 7. ZADATAK
console.log(dan.nepovoljanDan()); // 8. ZADATAK
console.log(dan.neuobicajenDan()); // 9. ZADATAK
