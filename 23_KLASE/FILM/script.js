import { Film } from "./film.js";

let f1 = new Film("Odiseja u svemiru 2001", "Kjubrik", 1901, [9, 7, 9, 8]);
let f2 = new Film("Zerkalo", "Tarkovski", 2000, [7, 10, 8, 6, 9, 10]);
let f3 = new Film("", "", 1900, [6, 4, 7, 5, 5, 2, 3]);
console.log(f1, f2, f3);

console.log(f3.ocene);
console.log(`Prosecna ocena ${f2.naslov} je ${f2.prosek()}`);

// =======================================================================

let filmovi = [f1, f2, f3];

// PROSEK ================================================================

console.log(f1.prosek());

// VEK FILMOVA==================================================================
//  Napraviti funkciju vekFilmova kojoj se prosleđuje niz filmova i
// ceo broj (vek), a funkcija ispisuje samo one filmove koji su
// stvoreni u prosleđenom veku

let vekFilmova = (niz, vek) => {
  niz.forEach((film) => {
    if (Math.ceil(film.godinaIzdanja / 100) == vek) {
      console.log(film);
    }
  });
};

vekFilmova(filmovi, 20);

// let vekFilomva2 = (niz, vek) => {
//  let pocetnaGod = vek*100 -99;
// }

// PROSECNA OCENA

//  Napraviti funkciju prosecnaOcena kojoj se prosleđuje niz
// filmova, a koja određuje i vraća prosečnu ocenu svih filmova

let prosecnaOcena2 = (niz) => {
  let zbir = 0;
  niz.forEach((film) => {
    zbir += film.prosek();
  });
  return zbir / niz.length;
};

console.log(prosecnaOcena2(filmovi));

let prosecnaOcena = (niz) => {
  let sumaSvihOcena = 0;
  let brojOcena = 0;
  niz.forEach((f) => {
    let ocene = f.ocene;
    console.log(ocene);
    ocene.forEach((o) => {
      sumaSvihOcena += o;
      // brojOcena++;
    });
    brojOcena += ocene.length;
  });
  return sumaSvihOcena / brojOcena;
};
console.log(`Prosecna ocena svih filmova je ${prosecnaOcena(filmovi)}`);

// NAJBOLJE OCENJENI
// Napraviti funkciju najboljeOcenjeni kojoj se prosleđuje niz filmova, a
// ona vraća najbolje ocenjeni film

let najboljeOcenjeni = (niz) => {
  let naj = niz[0];
  niz.forEach((f) => {
    if (naj.prosek() < f.prosek()) {
      naj = f;
    }
  });
  return naj;
};
console.log(najboljeOcenjeni(filmovi));

// OSREDNJI FILM
// Napraviti funkciju osrednjiFilm kojoj se prosleđuje niz filmova a ona
// vraća film koji je najbliži prosečnoj oceni svih filmova

let osrednjiFilm = (niz) => {
  let avgSvihFilmova = prosecnaOcena(niz);
  let minRastojanje = Math.abs(avgSvihFilmova - niz[0].prosek());
  let minFilm = niz[0];

  niz.forEach((f) => {
    if (minRastojanje > Math.abs(avgSvihFilmova - f.prosek())) {
      minRastojanje = Math.abs(avgSvihFilmova - f.prosek());
      minFilm = f;
    }
  });
  return minFilm;
};

console.log(osrednjiFilm(filmovi));

// Napraviti funkciju najmanjaOcenaNajboljeg kojoj se prosleđuje niz filmova a ona određuje najbolji film i ispisuje njegovu najslabiju ocenu.

let najmanjaOcenaNajboljeg = (niz) => {
  let najFilm = najboljeOcenjeni(niz);
  let najslabijaOcena = najFilm.ocene[0];
  najFilm.ocene.forEach((o) => {
    if (najslabijaOcena > o) {
      najslabijaOcena = o;
    }
  });
  console.log(najslabijaOcena);
};

najmanjaOcenaNajboljeg(filmovi);

// Napisati funkciju najmanjaOcena kojoj se prosleđuje niz filmova, a koja vraća koja je najmanja ocena koju je bilo koji film dobio.

let najmanjaOcena = (niz) => {
  let najmanja = niz[0].ocene[0];
  niz.forEach((film) => {
    film.ocene.forEach((o) => {
      if (o < najmanja) {
        najmanja = o;
      }
    });
  });
  return najmanja;
};

console.log(najmanjaOcena(filmovi));

// Napisati funkciju najcescaOcena kojoj se prosleđuje niz ocena, a ona vraća ocenu koju su filmovi najčešće dobijali.

// let sveOcene = (niz) => {
//   let arrSveOcene = [];
//   niz.forEach((film) => {
//     // arrSveOcene.push(film.ocene); // Daje niz u kome su ocene za svaki od filmova podnizovi
//     arrSveOcene = arrSveOcene.concat(film.ocene); // Nema podnizova, sve je ejdan veliki niz
//   });
//   return arrSveOcene;
// };
// console.log(sveOcene(filmovi));

// let najcescaOcena = (nizOcena) => {
//   let pretpostavkaNajucestalijiElem = nizOcena[0];
//   let brPojavljivanjaPretpostavke = 1; // Sigurno se jednom pojavljivala ta ocena
//   for (let i = 0; i < nizOcena.length; i++) {
//     let tekuci = nizOcena[i]; // zvezdica
//     let tekuciBrPojavljivanja = 0;

//     for (j = 0; j < nizOcena.length; j++) {
//       if (tekuci == nizOcena[j]) {
//         tekuciBrPojavljivanja++;
//         // nasli smo isti element i treba povecati broj pojavljivanja tekuceg
//       }
//     }
//     if (tekuciBrPojavljivanja > brPojavljivanjaPretpostavke) {
//       brPojavljivanjaPretpostavke = tekuciBrPojavljivanja;
//       pretpostavkaNajucestalijiElem = tekuci;
//     }
//   }
//   return pretpostavkaNajucestalijiElem;
// };
// console.log(najcescaOcena());

//======================================================================================

let oceneNiz = [5, 6, 7, 6, 6, 3, 2, 10];

let najcescaOcena2 = (niz) => {
  let nizBrojaca = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  niz.forEach((ocena) => {
    if (ocena == 1) {
      nizBrojaca[0]++;
    } else if (ocena == 2) {
      nizBrojaca[1]++;
    } else if (ocena == 3) {
      nizBrojaca[2]++;
    } else if (ocena == 4) {
      nizBrojaca[3]++;
    } else if (ocena == 5) {
      nizBrojaca[4]++;
    } else if (ocena == 6) {
      nizBrojaca[5]++;
    } else if (ocena == 7) {
      nizBrojaca[6]++;
    } else if (ocena == 8) {
      nizBrojaca[7]++;
    } else if (ocena == 9) {
      nizBrojaca[8]++;
    } else if (ocena == 10) {
      nizBrojaca[9]++;
    }
  });
  let max = nizBrojaca[0];
  let maxSrednjaOcena = nizBrojaca[0] + 1;
  for (let i = 0; i < nizBrojaca.length; i++) {
    if (max < nizBrojaca[i]) {
      max = nizBrojaca[i];
      maxSrednjaOcena = i + 1;
    }
  }
  return maxSrednjaOcena;
};

console.log(najcescaOcena2(oceneNiz));

// Napraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a ona vraća niz onih filmova koji su bolje ocenjeni (veća im je prosečna ocena) od prosleđene ocene.

let iznadOcene = (ocena, filmovi) => {
  let nizFilmova = [];
  filmovi.forEach((film) => {
    if (film.prosek() > ocena) {
      nizFilmova.push(film);
    }
  });
  return nizFilmova;
};
console.log(f1.prosek(), f2.prosek(), f3.prosek());
console.log(iznadOcene(8.3, filmovi));

// Napisati funkciju iznadOceneNoviji kojoj se prosleđuje ocena i niz filmova  a koja treba da na ekranu da ispiše sve podatke o najnovijem filmu koji zadovoljava prosleđenu ocenu

let iznadOceneNoviji = (ocena, filmovi) => {
  let nizFilmova = iznadOcene(ocena, filmovi);
  let noviji = nizFilmova[0];
  nizFilmova.forEach((f) => {
    if (f.godinaIzdanja > noviji.godinaIzdanja) {
      noviji = f;
    }
  });
  console.log(noviji);
};
iznadOceneNoviji(7.6, filmovi);
