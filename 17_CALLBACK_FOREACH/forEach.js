let c = [1, 3, 6, -8, 6, 6, 4];
// =======================================================================
// ZADATAK 1
// Ispisati sve elemente niza od 5 stringova.
let elemString = (niz) => {
  niz.forEach((el) => {
    console.log(el);
  });
};

let stringovi = ["kvaka", "braka", "svraka", "sljaka", "sijaka"];
elemString(stringovi);
// =======================================================================
// ZADATAK 2
// Odrediti zbir elemenata celobrojnog niza.
let sumaElem = (niz) => {
  let suma = 0;
  niz.forEach((el) => {
    suma += el;
  }); // ova arrow f-ja jeste callback funkcija
  return suma;
};
// =======================================================================

// ZADATAK 3
// Odrediti proizvod elemenata celobrojnog niza.
let proizvodElem = (niz) => {
  let proizvod = 1;
  niz.forEach((el) => {
    proizvod *= el;
  }); // ova arrow f-ja jeste callback funkcija
  return proizvod;
};

console.log(proizvodElem(c));

// =======================================================================
// ZADATAK 4
// Odrediti srednju vrednost elemenata celobrojnog niza.
let aS = (niz) => {
  let suma = sumaElem(niz);
  return suma / niz.length;
};

console.log(aS(c));

// =======================================================================
// ZADATAK 5
// Odrediti maksimalnu vrednost u celobrojnom nizu.

let maxVr = (niz) => {
  max = niz[0];
  niz.forEach((el) => {
    if (el > max) {
      max = el;
    }
  });
  return max;
};

// =======================================================================
// ZADATAK 6
// Odrediti minimalnu vrednost u celobrojnom nizu.

let minVr = (niz) => {
  min = niz[0];
  niz.forEach((el) => {
    if (el < min) {
      min = el;
    }
  });
  return min;
};
// =======================================================================
// ZADATAK 7
// Odrediti indeks maksimalnog elementa celobrojnog niza.
let indexMaxVr = (niz) => {
  let max = niz[0];
  let index = 0;
  niz.forEach((el, i) => {
    if (el > i) {
      max = el;
      index = i;
    }
  });
  return index;
};

let indexMaxVr2 = (niz) => {
  let max = maxVr(niz);
  let idx = undefined;
  niz.forEach((el, i) => {
    if (el == max && idx == undefined) {
      idx = i;
    }
  });
  return idx;
};

// =======================================================================
// ZADATAK 7 +
// Vratiti indekse svih maksimalnih elemenata

let indexSvihMaxVr = (niz) => {
  let max = maxVr(niz);
  let indeksi = [];
  niz.forEach((el, i) => {
    if (el == max) {
      indeksi.push(i);
    }
  });
  return indeksi;
};

// =======================================================================

// REZULTATI
let a = [1, 3, 4, 6];
console.log(sumaElem(a)); // sumaElem NIJE callback funkcija
console.log(maxVr(a));
console.log(indexMaxVr(a));

let b = [1, 3, 6, -8, 6, 6, 3];
console.log(minVr(b));
console.log(indexMaxVr(b)); // 5
console.log(indexMaxVr2(b)); // 2
console.log(indexSvihMaxVr(b)); // [2, 4, 5]

// =======================================================================

// ZADATAK 8
// Odrediti indeks minimalnog elementa celobrojnog niza.

let minIndex = (niz) => {
  min = niz[0];
  indeks = 0;
  niz.forEach((el, i) => {
    if (el < min) {
      el = min;
      indeks = i;
    }
  });
  return indeks;
};

console.log(minIndex(b));

// =======================================================================

// ZADATAK 9
// Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.

let visiOdSrednje = (niz) => {
  let sredina = aS(niz);
  let br = 0;
  niz.forEach((el) => {
    if (el > sredina) {
      br++;
    }
  });
  return br;
};

console.log(visiOdSrednje(b));

// =======================================================================

// ZADATAK 10
// Izračunati zbir pozitivnih elemenata celobrojnog niza.

let zbirPozitivnih = (niz) => {
  let zbir = 0;
  niz.forEach((el) => {
    if (el > 0) {
      zbir += el;
    }
  });
  return zbir;
};

console.log(zbirPozitivnih(b));

// =======================================================================

// ZADATAK 11
// Odrediti broj parnih elemenata u celobrojnom nizu.

let brojParnih = (niz) => {
  let br = 0;
  niz.forEach((el) => {
    if (el % 2 == 0) {
      br++;
    }
  });
  return br;
};

console.log(brojParnih(b));

// =======================================================================

// ZADATAK 12
// Odrediti broj parnih elemenata sa neparnim indeksom.

let parniNeparniIndex = (niz) => {
  let br = 0;
  niz.forEach((el, i) => {
    if (el % 2 == 0 && i % 2 == 1) {
      br++;
    }
  });
  return br;
};

console.log(parniNeparniIndex(b));

// =======================================================================

// ZADATAK 13
// Izračunati sumu elemenata niza sa parnim indeksom.

let sumaParniNeparniIndeks = (niz) => {
  suma = 0;
  niz.forEach((el, i) => {
    if (i % 2 == 0) {
      suma += el;
    }
  });
  return suma;
};

console.log(sumaParniNeparniIndeks(b));

// =======================================================================
console.log(`Originalni niz ${b}`);
// [1, 3, 6, -8, 6, 6, 4];
// ZADATAK 14
// Promeniti znak svakom elementu celobrojnog niza.
// MORA DA SE UVEDE I PARAMETAR ARRAY KAKO BI OVO BILO MOGUCE
let promenaNiz = (niz) => {
  niz.forEach((el, i, array) => {
    array[i] = array[i] * -1;
  });
  console.log(`Prva inverzija${niz}`);
};

promenaNiz(b);

// =======================================================================

// ZADATAK 15
// Promeniti znak svakom neparnom elementu celobrojnog
// niza sa parnim indeksom.
// +++++++++++++++++++++++++++++++++ RIP +++++++++++++++++++++++++++++++++

console.log(`I dalje prva inverzija${b}`);
let znak1 = (niz) => {
  niz.forEach((el, i, array) => {
    if (array[i] % 2 != 0 && i % 2 == 0) {
      array[i] = array[i] * -1;
    }
  });
  console.log(`Druga inverzija neuspesna, samo prvi clan je inverzovan?${niz}`);
};

znak1(b);

// =======================================================================

// ZADATAK 16
// Dat je niz stavki za kupovinu (članovi niza su stringovi).
// Prolaskom kroz niz napraviti neuređenu listu i ispisati je u
// html dokument.

let listaNiz = [`paradajz`, `jabuke`, `kruske`, `vanila`];

let kupovnaLista = (niz) => {
  let lista = `<ul>`;
  niz.forEach((el) => {
    lista += `
      <li>${el}</li>
    `;
  });
  lista += `</ul>`;
  return lista;
};
document.body.innerHTML += kupovnaLista(listaNiz);

// =======================================================================

// ZADATAK 17
// Dat je niz imena košarkaškog tima. Prolaskom kroz niz
// formirati tabelu u čijim su redovima imena tima, i tabelu
// ispisati u html dokument.

let timoviNiz = [`Mavericks`, `Nuggets`, `Hornets`];

let timoviTabela = (niz) => {
  let tabela = `<table border= 1>`;
  niz.forEach((el) => {
    tabela += `
      <tr>
        <td>${el}</td>
      </tr>
        `;
  });
  tabela += `</table>`;
  return tabela;
};

document.body.innerHTML += timoviTabela(timoviNiz);

// =======================================================================

// ZADATAK 18
// Dat je niz stringova čiji su članovi putanje do slika.
// Prikazati sve sliku u html dokumentu sa putanjama
// navedenim u nizu.

let imgNiz = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
  "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg",
  "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg",
];

let showImg = (niz) => {
  niz.forEach((el) => {
    document.write(`<img src=${el} style="width:200px; height:200px;">`);
  });
};

showImg(imgNiz);
// =======================================================================

// ZADATAK 19
// Ispisati dužinu svakog elementa u nizu stringova.
let imena = ["Stefan", "Nela", "Bojan", "Nikola", "Petar"];

let duzineSvihStr = (niz) => {
  niz.forEach((el) => {
    console.log(el.length);
  });
};

duzineSvihStr(imena);

// =======================================================================

let nizStringova = ["knjiga", "papir", "olovka", "cesma", "stolica"];

let duzinaStringa = (niz) => {
  let noviNiz = [];
  niz.forEach((el) => {
    noviNiz.push(el.length);
  });
  return noviNiz;
};
console.log(duzinaStringa(nizStringova));

// =======================================================================

let nizElemenata = [
  "danas",
  "sutra",
  "prekosutra",
  "nakosutra",
  "nakostresen",
  "strvi",
  "anakonda",
  "Asteriks",
];

let duzinaElementa = (niz) => {
  noviNiz = [];
  niz.forEach((el, i) => {
    noviNiz.push(el.length);
  });
  return noviNiz;
};
console.log(duzinaElementa(nizElemenata));

// =======================================================================

// ZADATAK 20
// Odrediti element u nizu stringova sa najvećom dužinom.

let maxDuzinaPoslednji = (niz) => {
  let maxd = 0;
  niz.forEach((el) => {
    if (el.length > maxd) {
      maxd = el.length;
    }
  });
  let maxStr = undefined;
  niz.forEach((el) => {
    if (el.length == maxd) {
      maxStr = el;
    }
  });
  return maxStr;
};
console.log(maxDuzinaPoslednji(imena)); // "Nikola"

let maxDuzinaPrvi = (niz) => {
  let maxd = 0;
  niz.forEach((el) => {
    if (el.length > maxd) {
      maxd = el.length;
    }
  });
  let maxStr = undefined;
  niz.forEach((el) => {
    if (el.length == maxd && maxStr == undefined) {
      maxStr = el;
    }
  });
  return maxStr;
};
console.log(maxDuzinaPrvi(imena)); // "Stefan"

// =======================================================================

// ZADATAK 21
// Odrediti broj elemenata u nizu stringova cija je duzina veca od prosecne duzine svih stringova u nizu.

let prosecnaDuzina = (niz) => {
  let duz = 0;
  niz.forEach((el) => {
    duz += el.length;
  });
  return duz / niz.length;
};

console.log(prosecnaDuzina(imena));

let brojNatprosecnoDugih = (niz) => {
  let duz = prosecnaDuzina(niz);
  let br = 0;
  niz.forEach((el) => {
    if (el.length > duz) {
      br++;
    }
  });
  return br;
};

console.log(brojNatprosecnoDugih(imena));

// =======================================================================

// ZADATAK 22
// Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’.

let brojSadrziA = (niz) => {
  let br = 0;
  niz.forEach((el) => {
    if (el.includes("a") || el.includes("A")) {
      br++;
    }
  });
  return br;
};

console.log(brojSadrziA(imena));

// =======================================================================

// ZADATAK 23
// Odrediti broj elemenata u nizu stringova koji pocinju na slovo 'a’ ili 'A'.

let brojPocinjeA = (niz) => {
  let br = 0;
  niz.forEach((el) => {
    if (el[0] == "a" || el[0] == "A") {
      br++;
    }
  });
  return br;
};

console.log(brojPocinjeA(imena));

// =======================================================================
