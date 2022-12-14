let x = 5;
let y = 7;

if (x == y) {
  console.log("Jednake vrenosti");
} else {
  console.log("Razlicite vrednosti");
}

if (x != y) {
  console.log("Razlicite vrednosti");
} else {
  console.log("Jedanke vrednosti");
}

// ZADATAK 1.
// Za unetu zapreminu proizvoda, u paragrafu ispisati “Throw away”, ukoliko je proizvod zapremine veće od 100ml. U suprotnom ispisati “Pack up”.

let zapreminaProizvoda = 100;

if (zapreminaProizvoda > 100) {
  document.write("<p>Throw away</p>");
} else {
  document.write("<p>Pack up</p>");
}

// ZADATAK 2.
// Za unetu temperaturu u paragrafu, ispisati “Temperatura u plusu” crvenom bojom ili “Temperatura u minusu” plavom bojom. Ukoliko je temperatura nula, računati kao temperaturu u plusu.

temperatura = -1;

if (temperatura >= 0) {
  document.write(`<p style="color: red;">Temperatura je u plusu</p>`);
} else {
  document.write(`<p style="color: blue;">Temperatura je u minusu</p>`);
}

// ZADATAK 3.
// U odnosu na pol koji je korisnik uneo u promenljivu  (“m” za muški pol ili “z” za ženski pol) na ekranu prikazati odgovarajući avatar (odgovarajuću sličicu).

pol = "f";

if (pol == "m") {
  document.write("<img src='male-gender.png'></img>");
} else {
  document.write("<img src='femenine.png' width= 10%></img>");
}

// ZADATAK 4.
// U odnosu na preuzeto trenutno vreme sa računara, u paragrafu ispisati da li je trenutno jutro ili popodne.
// Popodne je kada prođe 12:00 sati, ne računajući i to vreme.

const date = new Date();

let hours = date.getHours();
console.log(hours);

if (hours > 12) {
  document.write("<p>Trenutno je podne</p>");
} else {
  document.write("<p>Trenutno je jutro</p>");
}

// ZADATAK 5.
// Za preuzetu godinu sa računara i unetu godinu rođenja izračunati i u paragrafu ispisati da li je osoba punoletna ili maloletna. osoba je punoletna kada napuni 18 godina.

let year = date.getFullYear();
let yearB = 1990;
if (year - yearB >= 18) {
  document.write("<p>Punoletna</p>");
} else {
  document.write("<p>Maloletna</p>");
}

// ZADATAK 6.
// Odrediti i u paragrafu ispisati najveći od tri uneta broja (samo uz pomoć if naredbi, bez korišćenja logičkih operatora).

let n1 = 10;
let n2 = -15;
let n3 = 13;

let max = n1;
if (max < n2) {
  max = n2;
}
if (max < n3) {
  max = n3;
}

document.write(`<p>Maksimum je ${max}</p>`);

// sa minimumom
let min = n1;
if (min > n2) {
  min = n2;
}
if (min > n3) {
  min = n3;
}
document.write(`<p>Minimum je ${min}</p>`);
