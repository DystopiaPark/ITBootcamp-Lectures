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
