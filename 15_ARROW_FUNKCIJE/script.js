// Imenovane funkcije: (function), ime, {param}, {return}
function sum(a, b) {
  return a + b;
}

let rez = sum(1, 2);
console.log(rez);

// Anonimne funkcije: (function), {param}, {return}
let suma = function (a, b) {
  return a + b;
};

// poziv anonimne f-je preko promenljivih suma
rez = suma(1, 2);
console.log(rez);

// Arrow funkcije: {param}, =>, {return}
// (anonimne f-je sa skracenim zapisom)
let suma2 = (a, b) => {
  return a + b;
};

rez = suma2(5, 6);
console.log(rez);

let hello = () => {
  console.log(`Hello world!`);
};

hello();

let echo = (s1, s2) => {
  let rezultat = s1 + ", " + s2;
  console.log(rezultat);
};

echo("Stefan", "Stanimirovic");

// ZADATAK 1
// Napisati funkciju pozdrav kojoj se prosleđuje ime i prezime, a funkcija ispisuje pozdrav. Na primer za uneto ime Jelena i prezime Matejić, funkcija ispisuje Zdravo Jelena Matejić.
// VARIJACIJA
// Napisati arrow funkciju koja prihavata 3 parametra:  ime, prezime, godine
// A koja ispisuje jedan od zadatih tekstova:
//    - Osoba ____  ____ je punoletna
//    - Osoba ____  ____ je maloletna

// let osoba = (ime, prezime, godine) => {
//   if (godine >= 18) {
//     console.log(`Osoba ${ime} ${prezime} je punoletna`);
//   } else {
//     console.log(`Osoba ${ime} ${prezime} je maloletna`);
//   }
// };

// osoba("Filip", "Stojanovic", 32);

let ispisHTML = (ime, prezime, godine) => {
  if (godine >= 18) {
    let ispis = `<p>Osoba ${ime} ${prezime} je punoletna</p>`;
    return ispis;
  } else {
    let ispis = `<p>Osoba ${ime} ${prezime} je maloletna</p>`;
    return ispis;
  }
};

document.body.innerHTML += ispisHTML("Filip", "Stojanovic", 32);
document.body.innerHTML += ispisHTML("Pera", "Peric", 15);

// ZADATAK 2
// Napisati funkciju zbir koja računa zbir dva realna broja.
// Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broja.

let zbir = (a, b) => a + b;
console.log(zbir(3, 5));

// ZADATAK 3
// Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.

let neparan = (n) => {
  if (n % 2 == 1) {
    return true; // direktno vracamo boolean vrednost, nema potrebe za dodatnom varijablom
  } else {
    return false;
  }
};

document.body.innerHTML += neparan(5);

// Varijanta 5 kratka

let neparan5 = (n) => {
  return n % 2 == 1;
};

console.log(neparan5(9));
console.log(neparan5(2));

// Varijanta 6 koristi svojstva arrow funkcija
// 1) Ako arrow f-ji prosledjujemo TACNO JEDAN parametar, onda() nisu obavezne
// 2) Ako se telo arrow f-je sastoji SAMO od return naredbe, ona nije obavezna

let neparan6 = (n) => n % 2 == 1;

console.log(neparan5(9));
console.log(neparan5(2));

// ZADATAK 4
// Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

// a
// Varijantan 1 - Arrow f-je
let maks2 = (a, b) => {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};

console.log(maks2(3, 5));

// Varijanta 2 - Arrow f-je sa skracenim zapisom

let max2 = (a, b) => (a > b ? a : b);

console.log(max2(13, 6));

// Maksimum 4 broja
let maks4 = (a, b, c, d) => maks2(maks2(a, b), maks2(c, d));

console.log(maks4(5, 8, 3, 6));

// Varijanta 2

let max4 = (a, b, c, d) => maks2(maks2(maks2(a, b), c), d);

console.log(max4(9, 12, 22, 38));

// ZADATAK 5
// Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.

let showImg = (a) => document.write(`<img src=${a} style="width:200px;"/>`);

showImg(
  "https://apod.nasa.gov/apod/image/2212/GeminidoverBluemoonvalley-1024.jpg"
);

// ZADATAK 6
// Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.

let colorP = (color) =>
  document.write(`<p style="color:${color}">0 1 1 2 3 5 8 13 21 34 55</p>`);

colorP("red");

// ZADATAK 7
// Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
// Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?

let sedmiDan = (n) => {
  if (n % 7 == 0) {
    document.write(`Nedelja`);
  } else if (n % 7 == 1) {
    document.write(`Ponedeljak`);
  } else if (n % 7 == 2) {
    document.write(`Utorak`);
  } else if (n % 7 == 3) {
    document.write(`Sreda`);
  } else if (n % 7 == 4) {
    document.write(`Cetvrtak`);
  } else if (n % 7 == 5) {
    document.write(`Petak`);
  } else if (n % 7 == 6) {
    document.write(`Subota`);
  }
};
sedmiDan(13);

// ZADATAK 8
// Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m.
// Prebrojati koliko ima ovakvih brojeva od n do m.

let deljivSaTri = (n, m) => {
  let brBrojeva = 0;
  for (n; n <= m; n++) {
    if (n % 3 == 0) {
      console.log(n);
      brBrojeva++;
    }
  }
  console.log(brBrojeva);
};

deljivSaTri(3, 9);

// ZADATAK 9
// Napisati funkciju sumiraj koja određuje sumu brojeva od n do m.
// Brojeve n i m proslediti kao parametre funkciji.

let sumiraj = (n, m) => {
  let suma = 0;
  for (n; n <= m; n++) {
    suma += n;
  }
  console.log(suma);
};
sumiraj(3, 5);

// ZADATAK 10
// Napisati funkciju množi koja određuje proizvod brojeva od n do m.
// Brojeve n i m proslediti kao parametre funkciji.

let mnozi = (n, m) => {
  let proizvod = 1;
  for (n; n <= m; n++) {
    proizvod *= n;
  }
  console.log(proizvod);
};
mnozi(3, 5);

// ZADATAK 11
// Napraviti funkciju koja vraća aritmetičku sredinu brojeva od n do m.
// Brojeve n i m proslediti kao parametre funkciji.

let aS = (n, m) => {
  let zbir = 0;
  let brBrojeva = 0;
  for (n; n <= m; n++) {
    zbir += n;
    brBrojeva++;
  }
  return zbir / brBrojeva;
};

console.log(aS(3, 5));

// ZADATAK 12
// Napisati funkciju koja vraća aritmetičku sredinu brojeva kojima je poslednja cifra 3 u intervalu od n do m. Brojeve n i m proslediti kao parametre funkciji.

let aS3 = (n, m) => {
  let zbir = 0;
  let brBrojeva = 0;
  for (n; n <= m; n++) {
    if (n % 10 == 3) {
      zbir += n;
      brBrojeva++;
    }
  }
  return zbir / brBrojeva;
};

console.log(aS3(33, 55));

// ZADATAK 13
// Napisati funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.

let ceoBroj = (a) =>
  document.write(`<p style="font-size:${a}px;">Hapataka</p>`);

ceoBroj(24);

// ZADATAK 14
// Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora.

let petRecenica = (n) => {
  let i = n;
  for (i; i <= n + 4; i++) {
    document.write(`<p style="font-size:${i}px;">Hapataka</p>`);
  }
};

petRecenica(14);

// ZADATAK 15
// Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara. Brojeve n, a i d određujete sami.
//  Napišite funkciju kojoj se prosleđuju brojevi n, a i d. Funkcija treba da vrati vrednost koliko ćete ukupno navca zaraditi, ukoliko svakog meseca budete dobijali povišicu.
//  Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).

let praksa = (n, a, d) => {
  let suma = a;
  for (i = 1; i <= n - 1; i++) {
    suma += a + i * d;
  }
  return suma;
};
console.log(praksa(5, 10000, 5));

let ukupno = (n, a, d) => {
  let zbir = 0;
  for (i = 1; i <= n; i++) {
    zbir += a;
    a += d;
  }
  return zbir;
};
console.log(ukupno(5, 10000, 5));

// ZADATAK 16
// Na igrama bez granica, ekipi je postavljen zadatak da za što kraće vreme pređe stazu na kojoj se nalazi pokretni most. Takmičaru ove ekipe od polazne tačke do mosta treba t sekundi. Tačno p sekundi od kada takmičar može da krene sa polazne tačke (tj. od početka merenja) most počinje da se podiže. Od trenutka podizanja pa do spuštanja mosta protiče n sekundi i prelaz preko mosta za to vreme nije moguć. Nakon toga most ostaje spušten. Takmičari za čekanje kod mosta dobijaju negativne poene, pa je tim rešio da napravi program koji će im tačno odrediti u kojoj sekundi treba da pođu sa startne pozicije kako ne bi dobijali negativne poene. Pomozite timu da napravi funkciju na osnovu prosleđenih vrednosti t, p i n. Funkcija vraća koliko sekundi nakon početka merenja vremena treba da pođe, kako bi prošli poligon bez zaustavljanja.
// npr: t=15, p=20, n=25, čekanje je 0s
// npr: t=15, p=10, n=12, čekanje je 7s
