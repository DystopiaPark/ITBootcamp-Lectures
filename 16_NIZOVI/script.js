let cars = ["Toyota", "BMW", "Volvo"];
console.log(cars);
console.log(cars[0]); // Toyota
console.log(cars[2]); // Volvo
console.log(cars[3]); // undefined

// changing elements
cars[1] = "Peugeot"; // cars[1] = cars[1] + "208"
console.log(cars);

let razno = [15, -3.5, "hello", true, [1, 2, 3]];
console.log(razno);

// Ispis elemenata niza cars
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// Pristup elementima niza razno
for (let i = 0; i < razno.length; i++) {
  console.log(razno[i]);
}
// laksi nacin
let unutrasnjiNiz = razno[4];
for (let i = 0; i < unutrasnjiNiz.length; i++) {
  console.log(unutrasnjiNiz[i]);
}
// kompleksniji nacin
for (let i = 0; i < razno[4].length; i++) {
  console.log(razno[4][i]);
}
// kako promeniti element niza koji je unutar niza
razno[4][1] = 5; // ovako
for (let i = 0; i < razno[4].length; i++) {
  console.log(razno[4][i]);
}

// Uvecanje vrednosti unutrasnjeg niza za po 10%
for (let i = 0; i < razno[4].length; i++) {
  razno[4][i] *= 1.1;
  // razno[4][i] = razno[4][i] * 1.1;
}
for (let i = 0; i < razno[4].length; i++) {
  console.log(razno[4][i]);
}
// ZADATAK 1
// Ispisati sve elemente niza od 5 stringova.

// ZADATAK 2
// Odrediti zbir elemenata celobrojnog niza.

// van funkcije
let brojevi = [8, 4, -2, 0, 0, 1, 0];
let brojevi2 = [10, -5, 0, -3];
let brojevi3 = [10, 15, 22, -3, 4];

let zbir = 0;
for (i = 0; i < brojevi.length; i++) {
  zbir += brojevi[i];
}
console.log(zbir);

// unutar funkcije
let zbirBr = (niz) => {
  let zbir1 = 0;
  for (let i = 0; i < niz.length; i++) {
    zbir1 += niz[i];
  }
  return zbir1;
};
console.log(zbirBr(brojevi));
console.log(zbirBr(brojevi2));

// ZADATAK 3
// Odrediti proizvod elemenata celobrojnog niza.

// van funkcije
let proizvod = 1;
for (i = 0; i <= brojevi3.length; i++) {
  proizvod *= brojevi3[i];
}
console.log(proizvod);

// unutar funkcije

let proizvodBr = (niz) => {
  let proizvod1 = 1;
  for (i = 0; i < niz.length; i++) {
    proizvod1 *= niz[i];
  }
  return proizvod1;
};
console.log(proizvodBr(brojevi3));

// ZADATAK 4
// Odrediti srednju vrednost elemenata celobrojnog niza.

//1st version
let aS = (niz) => {
  let zbir2 = 0;
  let brBrojeva = 0;
  for (i = 0; i < niz.length; i++) {
    zbir2 += niz[i];
    brBrojeva++; // moze i niz.length
  }
  return zbir2 / brBrojeva;
};

console.log(aS(brojevi3));

//2nd version
let srVrednost2 = (niz) => zbirBr(niz) / niz.length;

console.log(srVrednost2(brojevi3));

// ZADATAK 4a
// Naci srednju vrednost parnih elemenata celobrojnog niza

let srVrednostParnih = (niz) => {
  let zbir = 0;
  let br = 0;
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] % 2 == 0) {
      zbir = zbir + niz[i];
      br++;
    }
  }
  return zbir / br;
};
console.log(srVrednostParnih(brojevi3));

// ZADATAK 5
// Odrediti maksimalnu vrednost u celobrojnom nizu.

let maxNiza = (niz) => {
  let max = niz[0];
  for (i = 1; i < niz.length; i++) {
    if (max < niz[i]) {
      max = niz[i];
    }
  }
  return max;
};
console.log(maxNiza(brojevi3));

// ZADATAK 6
// Odrediti minimalnu vrednost u celobrojnom nizu.

let min = (niz) => {
  let min = niz[0];
  for (i = 1; i < niz.length; i++) {
    if (min > niz[i]) {
      min = niz[i];
    }
  }
  return min;
};
console.log(min(brojevi3));

// ZADATAK 7
// Odrediti indeks maksimalnog elementa celobrojnog
// niza.

// sa casa vraca indeks poslednjeg maksimuma
let indMaxNiza = (niz) => {
  let max = maxNiza(niz);
  let indeks; // mora da se definise pre for petlje jer se vraca kao vrednost
  for (let i = 0; i < niz.length; i++) {
    if (max == niz[i]) {
      indeks = i;
    }
  }
  return indeks;
};
let elementi = [15, 13, 10, 15, 13, 15];
console.log(indMaxNiza(elementi));

// sa casa vraca indeks prvog maksimuma
let indMaxNiza2 = (niz) => {
  let max = maxNiza(niz);
  let indeks; // mora da se definise pre for petlje jer se vraca kao vrednost
  for (let i = 0; i < niz.length; i++) {
    if (max == niz[i]) {
      indeks = i;
      break; // || return indeks;
    }
  }
  return indeks;
};
console.log(indMaxNiza2(elementi));

// drugi nacin
let maxIndex = (niz) => {
  let max = niz[0];
  let maxIndex = 0;
  for (i = 1; i < niz.length; i++) {
    if (max < niz[i]) {
      max = niz[i];
      maxIndex = i;
    }
  }
  return maxIndex;
};
console.log(maxIndex(brojevi3));

// ZADATAK 8
// Odrediti indeks minimalnog elementa celobrojnog
// niza.

let minIndex = (niz) => {
  let min = niz[0];
  let minIndex = 0;
  for (i = 1; i < niz.length; i++) {
    if (min > niz[i]) {
      min = niz[i];
      minIndex = i;
    }
  }
  return minIndex;
};
console.log(minIndex(brojevi3));

// ZADATAK 9
// Odrediti broj elemenata celobrojnog niza koji su
// veći od srednje vrednosti. **** URADI PREKO AS FUNKCIJE POSTOJECE ****

// bez pozivanja prethodne AS funkcije
let greaterMean = (niz) => {
  let zbir = 0;
  let brBrojeva = 0;
  for (i = 0; i < niz.length; i++) {
    zbir += niz[i];
    brBrojeva++;
  }
  let aS = zbir / brBrojeva;
  let noElem = 0;
  for (i = 0; i < niz.length; i++) {
    if (niz[i] > aS) {
      noElem++;
    }
  }
  return noElem;
};

console.log(greaterMean(brojevi3));

//sa pozivanjem prethodne aS funkcije iz 4. zadatka

let greaterMean2 = (niz) => {
  let sredina = aS(niz);
  let noElem = 0;
  for (i = 0; i < niz.length; i++) {
    if (niz[i] > sredina) {
      noElem++;
    }
  }
  return noElem;
};
let brojevi5 = [10, 20, 30, 40, 50];
console.log(greaterMean2(brojevi5));

// ZADATAK 10
// Izračunati zbir pozitivnih elemenata celobrojnog
// niza.

let zbirPoz = (niz) => {
  let zbir = 0;
  for (i = 0; i < niz.length; i++) {
    if (niz[i] > 0) {
      zbir += niz[i];
    }
  }
  return zbir;
};

console.log(zbirPoz(brojevi3));

// ZADATAK 11
// Odrediti broj parnih elemenata u celobrojnom nizu.

let brojParnih = (niz) => {
  let brBrojeva = 0;
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] % 2 == 0) {
      brBrojeva++;
    }
  }
  return brBrojeva;
};
console.log(brojParnih(brojevi3));

// brojevi3 = [10, 15, 22, -3, 4];

// ZADATAK 12
// Odrediti broj parnih elemenata sa neparnim indeksom.

// moja verzija
let brojParnihNepindex = (niz) => {
  let brBrojeva = 0;
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] % 2 == 0 && i % 2 == 1) {
      brBrojeva++;
    }
  }
  return brBrojeva;
};
console.log(brojParnihNepindex(brojevi3));

// ZADATAK 13
// Izračunati sumu elemenata niza sa parnim indeksom.

// prvi nacin
let sumaParnihIndeksa = (niz) => {
  let suma = 0;
  for (let i = 0; i < niz.length; i++) {
    if (i % 2 == 0) {
      suma += niz[i];
    }
  }
  return suma;
};
console.log(sumaParnihIndeksa(brojevi3));

// drugi nacin

let sumaParnihIndeksa2 = (niz) => {
  let ukupno = zbirBr(niz); // iz zadatka 2
  for (i = 0; i < niz.length; i++) {
    if (i % 2 != 0) {
      ukupno -= niz[i];
    }
  }
  return ukupno;
};

console.log(sumaParnihIndeksa2(brojevi3));

// ZADATAK 14
// Promeniti znak svakom elementu celobrojnog niza.
niz4 = [2, 4, 16, 18, -10];

// vraca novi niz
let promena = (niz) => {
  let newArray = [];
  for (i = 0; i < niz.length; i++) {
    newArray[i] = -niz[i];
    // newArray.push(-niz[i]);
  }
  return newArray;
};

console.log(promena(niz4));

// izmena starog niza

let znak = (niz) => {
  for (i = 0; i < niz.length; i++) {
    niz[i] = niz[i] * -1;
  }
};
znak(niz4);
console.log(niz4);

//========================================================================
// ZADATAK 15
// Promeniti znak svakom neparnom elementu celobrojnog
// niza sa parnim indeksom.

// vraca novi niz

let promenaNeparni = (niz) => {
  let newArray = [];
  for (i = 0; i < niz.length; i++) {
    if (niz[i] % 2 == 1 && i % 2 == 0) {
      newArray[i] = -niz[i];
    } else {
      newArray[i] = niz[i];
    }
  }
  return newArray;
};
console.log(promenaNeparni(niz4));

// izmena starog niza

let znak2 = (niz) => {
  for (i = 0; i < niz.length; i++) {
    if (niz[i] % 2 == 1 && i % 2 == 0) {
      niz[i] = niz[i] * -1;
    }
  }
  return niz;
};
// niz4 = [2, 4, 16, 18, -10];
console.log(znak2(niz4));

//========================================================================

// ZADATAK 16
// Dat je niz stavki za kupovinu (članovi niza su stringovi).
// Prolaskom kroz niz napraviti neuređenu listu i ispisati je u
// html dokument.

let listaNiz = ["prasak", "zejtin", "hleb", "so", "kafa", "sirce"];
let lista = `<ul>`;
let kupovina = (niz) => {
  for (i = 0; i < niz.length; i++) {
    lista += `
    <li>${niz[i]}</li>
    `;
  }
  lista += `</ul>`;

  return lista;
};

kupovina(listaNiz);
document.body.innerHTML += lista;

//========================================================================

// ZADATAK 17
// Dat je niz imena košarkaškog tima. Prolaskom kroz niz
// formirati tabelu u čijim su redovima imena tima, i tabelu
// ispisati u html dokument.

let imenaTimovaNiz = [
  "Mavericks",
  "Nuggets",
  "Bucks",
  "76'ers",
  "Lakers",
  "Grizzlies",
];

let imenaIgracaNiz = [
  "Doncic",
  "Jokic",
  "Antetekumpo",
  "Embid",
  "Lebron",
  "Morant",
];

let tabela = `<table border= 1>`;

let kosarka = (niz1, niz2) => {
  for (i = 0; i <= niz1.length - 1; i++) {
    tabela += `
      <tr>
        <td>${niz1[i]}</td>
        <td>${niz2[i]}</td>
      </tr>
    `;
  }
  tabela += `</table>`;
  return tabela;
};

kosarka(imenaTimovaNiz, imenaIgracaNiz);
document.body.innerHTML += tabela;

//========================================================================

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

let imgPut = (niz) => {
  for (i = 0; i <= niz.length; i++) {
    document.write(`<img src=${niz[i]} style="width: 300px;"/>`);
  }
};

imgPut(imgNiz);

// ZADATAK 19
// Ispisati dužinu svakog elementa u nizu stringova.

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
let duzinaElemenata = (niz) => {
  let noviNiz = [];
  for (i = 0; i < niz.length; i++) {
    noviNiz[i] = niz[i].length;
  }
  return noviNiz;
};

console.log(duzinaElemenata(nizElemenata));
// ZADATAK 20
// Odrediti element u nizu stringova sa najvećom dužinom.

let elementNajveceDuzine = (niz) => {
  let max = niz[0].length;
  let maxString = niz[0];
  for (i = 0; i < niz.length; i++) {
    if (max < niz[i].length) {
      maxString = niz[i];
    }
  }
  return maxString;
};

console.log(elementNajveceDuzine(nizElemenata));

// ZADATAK 21
// Odrediti broj elemenata u nizu stringova čija je dužina
// veća od prosečne dužine svih stringova u nizu.

let vecaProsecnaDuzina = (niz) => {
  let zbir = 0;
  let brStringova = 0;
  for (i = 0; i < niz.length; i++) {
    zbir += niz[i].length;
    brStringova++;
  }
  let aS = zbir / brStringova;
  let brElemenata = 0;
  for (i = 0; i < niz.length; i++) {
    if (niz[i].length > aS) {
      brElemenata++;
    }
  }
  return brElemenata++;
};

console.log(vecaProsecnaDuzina(nizElemenata));

// ZADATAK 22
// Odrediti broj elemenata u nizu stringova koji sadrže slovo
// 'a’.

let sadrziA = (niz) => {
  brElemenata = 0;
  for (i = 0; i < niz.length; i++) {
    if (niz[i].includes("a")) {
      brElemenata++;
    }
  }
  return brElemenata;
};

console.log(sadrziA(nizElemenata));

// ZADATAK 23
// Odrediti broj elemenata u nizu stringova koji počinju na
// slovo 'a' ili 'A’.

let pocinjeNaA = (niz) => {
  brElemenata = 0;
  for (i = 0; i < niz.length; i++) {
    if (niz[i].charAt(0) == "a" || niz[i].charAt(0) == "A") brElemenata++;
  }
  return brElemenata;
};

console.log(pocinjeNaA(nizElemenata));
