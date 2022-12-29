console.log(`Funkcije`);

function zdravo() {
  console.log(`Zdravo!`);
}

zdravo();
zdravo();
console.log(`Hello!`);
zdravo();

for (i = 1; i <= 5; i++) {
  zdravo(); // Poziva funkciju onoliko puta koliko se izvrsi for petlja
}

///////////////////////////////

function hello(name) {
  console.log(`Hello ${name}`);
}

hello("Jelena");
hello("Stefan");

let ime = "Zlatko";
hello(ime);

let name = "Nikola";
hello(name);

////////////////////////////////

function hello_full_name(ime, prezime) {
  console.log(`Hello ${ime} ${prezime}`);
}

hello_full_name("Stefan", "Stanimirovic");

let im = "Ana";
let pr = "Ivanovic";
hello_full_name(im, pr);

///////////////////////////////

// ZADATAK 1
// Napisati funkciju pozdrav kojoj se prosleđuje ime i prezime, a funkcija ispisuje pozdrav. Na primer za uneto ime Jelena i prezime Matejić, funkcija ispisuje Zdravo Jelena Matejić.

function pozdrav(ime, prezime) {
  console.log(`Zdravo ${ime} ${prezime}`);
}

pozdrav("Filip", "Stojanovic");

// ZADATAK 2
// Napisati funkciju zbir koja računa zbir dva realna broja.
// Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broja.

function zbir(operacija, a, b) {
  if (operacija == "sabiranje") {
    console.log(a + b);
  } else if (operacija == "mnozenje") {
    console.log(a * b);
  } else if (operacija == "deljenje") {
    console.log(a / b);
  } else if (operacija == "oduzimanje") {
    console.log(a - b);
  } else {
    console.log("Pogresna operacija ili unosni tip");
  }
}

zbir("sabiranje", 5, 3);

// ZADATAK 3
// Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.

function neparan(n) {
  if (n % 2 != 0) {
    return true;
  } else {
    return false;
  }
}
neparan(3);

let tekst = neparan(3);
console.log(tekst);

// ZADATAK 4
// Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

// 1. deo
function maks2(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
let maks = maks2(3, 5);
console.log(`Veci je broj ${maks}`);

// 2. deo
// Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

// function maks4(d, e, f, g) {
//   if (d > e && d > f && d > g) {
//     return d;
//   } else if (e > f && e > g) {
//     return e;
//   } else if (f > g) {
//     return f;
//   } else return g;
// }

// let makss = maks4(25, 94, 3, 88);
// console.log(`Najveci broj je ${makss}`);

function maks4(br1, br2, br3, br4) {
  // let veci1 = maks2(br1, br2);
  // let veci2 = maks2(br3, br4);
  // let najveci = maks2(veci1, veci2);
  // return najveci;
  return maks2(maks2(br1, br2), maks2(br3, br4));
}
let naj = maks4(15, 2, 14, 3);
console.log(naj);

// ZADATAK 5
// Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.

function slika(link) {
  document.write(`<img src=${link} width=200px; />`);
}
slika(
  "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
);
// ZADATAK 6
// Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.
function boji_paragraf(boja) {
  document.write(`<p style="color:${boja};">Obojen tekst</p>`);
}

boji_paragraf("red");

// ZADATAK 7
// Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
// Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?

function sedmiDan(n) {
  if (n % 7 == 0) {
    document.write(`<p>Nedelja</p>`);
  } else if (n % 7 == 1) {
    document.write(`<p>Ponedeljak</p>`);
  } else if (n % 7 == 2) {
    document.write(`<p>Utorak</p>`);
  } else if (n % 7 == 3) {
    document.write(`<p>Sreda</p>`);
  } else if (n % 7 == 4) {
    document.write(`<p>Cetvrtak</p>`);
  } else if (n % 7 == 5) {
    document.write(`<p>Petak</p>`);
  } else if (n % 7 == 6) {
    document.write(`<p>Subota</p>`);
  }
}
sedmiDan(5);

// b

function mesec(n) {
  if (n % 12 == 0) {
    document.write(`<p>Decembar</p>`);
  } else if (n % 12 == 1) {
    document.write(`<p>Januar</p>`);
  } else if (n % 12 == 2) {
    document.write(`<p>Februar</p>`);
  } else if (n % 12 == 3) {
    document.write(`<p>Mart</p>`);
  } else if (n % 12 == 4) {
    document.write(`<p>April</p>`);
  } else if (n % 12 == 5) {
    document.write(`<p>Maj</p>`);
  } else if (n % 12 == 6) {
    document.write(`<p>Jun</p>`);
  } else if (n % 12 == 7) {
    document.write(`<p>Jul</p>`);
  } else if (n % 12 == 8) {
    document.write(`<p>Avgust</p>`);
  } else if (n % 12 == 9) {
    document.write(`<p>Septembar</p>`);
  } else if (n % 12 == 10) {
    document.write(`<p>Oktobar</p>`);
  } else if (n % 12 == 11) {
    document.write(`<p>Novembar/p>`);
  }
}
mesec(17);

// ZADATAK 8
// Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m.
// Prebrojati koliko ima ovakvih brojeva od n do m.
function deljivSaTri(n, m) {
  let brBrojeva = 0;
  for (n; n <= m; n++) {
    if (n % 3 == 0) {
      brBrojeva++;
    }
  }
  return brBrojeva;
}
let deljiv = deljivSaTri(3, 12);
document.write(`Ima ukupno ${deljiv} deljiva broja`);

// ZADATAK 9
// Napisati funkciju sumiraj koja određuje sumu brojeva od n do m.
// Brojeve n i m proslediti kao parametre funkciji.
function sumiraj(n, m) {
  let suma = 0;
  for (n; n <= m; n++) {
    suma += n;
  }
  return suma;
}
let sumarum = sumiraj(3, 12);
document.write(`<br>Suma je ${sumarum}`);

// ZADATAK 10
// Napisati funkciju množi koja određuje proizvod brojeva od n do m.
// Brojeve n i m proslediti kao parametre funkciji.

function mnozi(n, m) {
  let p = 1;
  for (n; n <= m; n++) {
    p *= n;
  }
  return p;
}
let p = mnozi(1, 5);
document.write(`<p>Proizvod je ${p}</p>`);
// ZADATAK 11
// Napraviti funkciju koja vraća aritmetičku sredinu brojeva od n do m.
// Brojeve n i m proslediti kao parametre funkciji.

function aS(n, m) {
  let brBrojeva = 0;
  let zbir = 0;
  for (n; n <= m; n++) {
    zbir += n;
    brBrojeva++;
  }
  return zbir / brBrojeva;
}

let aSred = aS(3, 5);
document.write(`<p>Aritmeticka sredina je ${aSred}</p>`);

// ZADATAK 12
// Napisati funkciju koja vraća aritmetičku sredinu brojeva kojima je poslednja cifra 3 u intervalu od n do m. Brojeve n i m proslediti kao parametre funkciji.

function aS3(n, m) {
  let brBrojeva = 0;
  let zbir = 0;
  for (n; n <= m; n++) {
    if (n % 10 == 3) {
      zbir += n;
      brBrojeva++;
    }
  }
  return zbir / brBrojeva;
}

let aSred3 = aS3(10, 14);
document.write(`<p>Aritmeticka sredina je ${aSred3}</p>`);

// ZADATAK 13
// Napisati funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.

function funkcija1(velicinaFonta) {
  document.write(
    `<p style="font-size:${velicinaFonta}px;">Jedan, dva, tri, pet, osam, trinaest</p>`
  );
}

funkcija1(22);

// ZADATAK 14
// Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora.

function funkcija2(i) {
  let n = i;
  for (i; i <= n + 4; i++) {
    document.write(
      `<p style="font-size:${i}px;">Jedan, dva, tri, pet, osam, trinaest</p>`
    );
  }
}
funkcija2(14);

// recenica()

// ZADATAK 15
// Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara. Brojeve n, a i d određujete sami.
//  Napišite funkciju kojoj se prosleđuju brojevi n, a i d. Funkcija treba da vrati vrednost koliko ćete ukupno novca zaraditi, ukoliko svakog meseca budete dobijali povišicu.
//  Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).

function ukupno(n, a, d) {
  let zbir = 0;
  for (i = 1; i <= n; i++) {
    zbir += a;
    a += d;
  }
  return zbir;
}
let total = ukupno(5, 10000, 5000);
console.log(total);

// ZADATAK 16
// Na igrama bez granica, ekipi je postavljen zadatak da za što kraće vreme pređe stazu na kojoj se nalazi pokretni most. Takmičaru ove ekipe od polazne tačke do mosta treba t sekundi. Tačno p sekundi od kada takmičar može da krene sa polazne tačke (tj. od početka merenja) most počinje da se podiže. Od trenutka podizanja pa do spuštanja mosta protiče n sekundi i prelaz preko mosta za to vreme nije moguć. Nakon toga most ostaje spušten. Takmičari za čekanje kod mosta dobijaju negativne poene, pa je tim rešio da napravi program koji će im tačno odrediti u kojoj sekundi treba da pođu sa startne pozicije kako ne bi dobijali negativne poene. Pomozite timu da napravi funkciju na osnovu prosleđenih vrednosti t, p i n. Funkcija vraća koliko sekundi nakon početka merenja vremena treba da pođe, kako bi prošli poligon bez zaustavljanja.
// npr: t=15, p=20, n=25, čekanje je 0s
// npr: t=15, p=10, n=12, čekanje je 7s

// let t = 15 Vreme potrebno da takmicar dodje do mosta
// p = 20; Most se podize toliko sekundi posle otpocetka
// n = 25; Vreme koje je neprohodno da se most podigne i spusti

function magija(t, p, n) {
  if (t <= p || t >= p + n) {
    return 0;
  } else {
    return p + n - t;
  }
}
let z = magija(25, 20, 5);
console.log(z);
