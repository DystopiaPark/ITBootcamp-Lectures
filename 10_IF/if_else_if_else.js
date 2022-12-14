let num = "kvak";
if (num < 0) {
  console.log("Broj je manji od nule");
} else if (num == 0) {
  console.log("Broje je jedank nuli");
} else if (num == 1) {
  console.log("Broje je jedank jedinici");
} else {
  console.log("Broj je veci od jedinice ili nije broj");
}

console.log("Kraj grananja");

// RAZLIKA IZMEDJU VISESTRUKOG IF I ELSE-IF

// Ako nesto moze da pripada na dva mesta, onda ce ici IF IF IF (Vise simptoma)

// Ako nesto pripada samo jednom, onda ce ici IF - ELSE IF - ELSE

// Kod ELSE IFa ako je uslov prethodno ispunjen, breakuje granu, dok kod IFa nastavlja sa grananjem

// ZADATAK 7
// Preuzeti koji je dan u nedelji sa računara i ispitati da li je to radni dan ili je u pitanju vikend.

let date = new Date();

let day = date.getDay();
console.log(day);
// nula je nedelja
if (day == 0) {
  console.log("vikend");
} else if (day < 6) {
  console.log("radni dan");
} else if (day == 6) {
  console.log("vikend");
}

// BOLJI NACIN ZA RESAVANJE 7 ZADATKA

let dan = date.getDay();
if (dan == 0) {
  console.log("vikend");
} else if (dan == 6) {
  console.log("Vikend");
} else {
  console.log("Radni dan");
}

// ZADATAK 8
// Na osnovu unetog broja poena u paragrafu ispitati koju ocenu profesor treba da upiše učeniku. Učenik je položio ispit nekom ocenom  ukoliko ima više od 50 poena, u suprotnom treba ispisati da je pao ispit.
// Za više od 50 poena učenik dobija ocenu 6,
// za više od 60 poena učenik dobija ocenu 7,
// za više od 70 poena učenik dobija ocenu 8,
// za više od 80 poena učenik dobija ocenu 9 i
// za više od 90 poena učenik dobija ocenu 10.

let brojPoena = 95;

if (brojPoena < 51) {
  document.write("<p>Ucenik je pao ispit</p>");
} else if (brojPoena < 61) {
  document.write("<p>Ucenik je dobio sesticu</p>");
} else if (brojPoena < 71) {
  document.write("<p>Ucenik je dobio sedmicu</p>");
} else if (brojPoena < 81) {
  document.write("<p>Ucenik je dobio osmicu</p>");
} else if (brojPoena < 91) {
  document.write("<p>Ucenik je dobio devetku</p>");
} else document.write("<p>Ucenik je dobio desetku</p>");

// ZADATAK 9
// Za vreme preuzeto sa računara ispisati
// dobro jutro za vreme manje od 12 sati ujutru,
// dobar dan za vreme manje od 18 sati,
// u ostalim slučajevima ispisati dobro veče.

vreme = date.getHours();
if (vreme < 12) {
  document.write("<p>Dobro jutro</p>");
} else if (vreme < 18) {
  document.write("<p>Dobar dan</p>");
} else {
  document.write("<p>Dobro vece</p>");
}
// ZADATAK 10
// Radno vreme jedne programerske firme je od 9h do 17h. Preuzeti vreme sa računara i ispitati da li u to vreme firma radi ili ne radi.

let hours = date.getHours();
console.log(hours);

if (hours >= 9 && hours < 17) {
  document.write("<p>Firma Radi</p>");
} else {
  document.write("<p>Firma ne radi</p>");
}

// ZADATAK 11
// Za unet sat početka i sat kraja radnog vremena dva lekara,
// ispisati DA ukoliko se smene lekara preklapaju, u suprotnom ispisati NE.
// (Ne može se desiti da lekar počne smenu pre ponoći, a završi sa smenom nakon ponoći, ovo se podrazumeva i ne ispitivati dodatno)

let p1 = 8;
let k1 = 16;
let p2 = 10;
let k2 = 12;

if (k1 < p2) {
  console.log("Nema preklapanja");
} else if (k2 < p1) {
  console.log("Nema preklapanja");
} else {
  console.log("Ima preklapanja");
}

// ZADATAK 12
// Za uneti broj ispitati da li je paran ili nije.

let number = 13;

if (number % 2 == 0) {
  console.log("Broj je paran");
} else {
  console.log("Broj je neparan");
}

// ZADATAK 13
// Za uneti broj ispisati da li je deljiv sa 3 ili ne.

if (number % 3 == 0) {
  document.write("Broj je deljiv sa tri");
} else {
  document.write("Broj nije deljiv sa tri");
}

// ZADATAK 14
// Za dva uneta broja, od većeg učitanog broja oduzeti manji i rezultat ispisati na ekranu.

let number1 = 5;
let number2 = 3;

if (number1 == number2) {
  document.write("<p>Brojevi su jednaki rezultat je da nema veceg i 0/p>");
} else if (number1 > number2) {
  let a = number1 - number2;
  document.write(`<p>${a}</p>`);
} else {
  a = number2 - number1;
  document.write(`<p>${a}</p>`);
}

// ZADATAK 15
// Za uneti broj ispitati da li je on manji od nule, veći od nule ili jednak nuli.
// Ukoliko je manji ili jednak nuli ispisati njegov prethodnik, a ukoliko je veći od nule ispisati njegov sledbenik.

let n = 0;
if (n <= 0) {
  document.write(--n);
} else document.write(++n);

// ZADATAK 16
// Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od njih je najmanji, korišćenjem if – else if strukture.

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

// srednji broj

let srednji = n1 + n2 + n3 - max - min;

document.write(`<p>Srednji je ${srednji}</p>`);

// ZADATAK 17
// Za učitani broj ispitati da li je ceo.

let numero = 38.9;
if (Math.floor(numero) != numero) {
  document.write(`<p>Broj nije ceo</p>`);
} else {
  document.write(`<p>Broj je ceo</p>`);
}
