// Prioritet u logickim operatorima:
// 1. !
// 2. &&
// 3. ||

// and - &&
// daje true iskljucivo ako su svi clanovi true
let a = 5;
let b = 6;

if (a == 5 && b == 6) {
  console.log("Hello!");
}

// or - ||
// ne daje true iskljucivo ako su oba izraza netacna
// tj. daje true ukoliko je makar jedan izraz tacan a v b v c makar 1

if (a == 5 || b == 6) {
  console.log("wolrd");
}

let c = 7;
if (a == 5 && b == 6 && c == 7) {
  console.log(`Sva tri su tacna`);
} else {
  console.log(`Neki od uslova nije tacan`);
}

if (a == 5 || b == 6 || c == 7) {
  console.log(`Makar jedan od uslova je tacan`);
} else {
  console.log(`Ni jedan od uslova nije tacan tj. svi uslovi su netacni`);
}

if (c != 7) {
  console.log(`c je razlicito od 7`);
}

if (!(c == 7)) {
  console.log(`c je razlicito od 7`);
}

// 21 ZADATAK
// Naći koji je najveći od tri uneta broja
// a, b i c, korišćenjem logičkih operatora.

let a1 = 5;
let b1 = 10;
let c1 = 15;

if (a1 > b1 && a1 > c1) {
  console.log(`Najveci broj je ${a1}`);
} else if (b1 > c1) {
  console.log(`Najveci broj je ${b1}`);
} else {
  console.log(`Najveci broj je ${c1}`);
}

// 22 ZADATAK
// U promenljivu uneti broj koji predstavlja temperaturu vazduha. Na ekranu ispisati „ekstremna temperatura“ ukoliko je temperatura manja od -15 stepeni Celzijusovih ili veća od 40 stepeni Celzijusovih.
t = -23;
if (t < -15 || t > 40) {
  console.log(`ekstremna temperatura`);
}

// 23 ZADATAK
// Ispitati da li je trenutna godina prestupna. (godinu preuzeti iz vremena na Vašem računaru).Godina je prestupna ako je deljiva sa 4 i nije deljiva sa 100 ili ako je deljiva sa 400.

let date = new Date();
let year = date.getFullYear;
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log(`${year} je prestupna`);
} else {
  console.log(`${year} nije prestupna`);
}

// 24 ZADATAK
// Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do 18h. Preuzeti dan i vreme sa računara, ispitati “otvoreno” ukoliko je butik trenutno otvoren.
// U suprotnom ispisati “zatvoreno”.

let dan = 0;
let sat = 17;

if (dan == 0 || dan == 6) {
  // Vikend
  if (sat >= 10 && sat < 18) {
    console.log(`Vikend je i butik je trenutno otvoren`);
    document.write("<img src=`open.png'>");
  } else {
    console.log(`Vikend je i butik je trenutno zatvoren`);
  }
} else {
  // Radni dan
  if (sat >= 9 && sat < 20) {
    console.log(`Vikend je i butik je trenutno otvoren`);
  } else {
    console.log(`Vikend je i butik je trenutno zatvoren`);
  }
}
