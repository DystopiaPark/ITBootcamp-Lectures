// ZADATAK 18
// Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od njih je najmanji, ovoga puta korišćenjem ugnježdenog grananja.
let a = 15;
let b = 20;
let c = 10;

if (a > b) {
  if (a > c) {
    console.log(`Najveci broj je ${a}`);
    if (b > c) {
      console.log(`Srednji broj je ${b}`);
      console.log(`Najmanji broj je ${c}`);
    } else {
      console.log(`Srednji broj je ${c}`);
      console.log(`Najmanji broj je ${b}`);
    }
  } else {
    console.log(`Najveci broj je ${c}`);
    console.log(`Srednji broj je ${a}`);
    console.log(`Najmanji broj je ${b}`);
  }
} else {
  // Ili je b najveci ili je c najveci
  // Ili je b najveci ili je c najveci
  if (b > c) {
    console.log(`Najveci broj je ${b}`);
    if (a > c) {
      console.log(`Srednji broj je ${a}`);
      console.log(`Najmanji broj je ${c}`);
    } else {
      console.log(`Srednji broj je ${c}`);
      console.log(`Najmanji broj je ${a}`);
    }
  } else {
    console.log(`Najveci broj je ${c}`);
    console.log(`Srednji broj je ${b}`);
    console.log(`Najmanji broj je ${a}`);
  }
}

let numero1 = 33;
let numero2 = 88;
let numero3 = 55;

if (numero1 > numero2) {
  if (numero1 > numero3) {
    document.write(numero1);
  }
} else if (numero2 > numero3) {
  document.write(numero2);
} else document.write(numero3);

// // ZADATAK 19
// // Učitati dva cela broja i ispitati da li je veći od njih paran.

number1 = 33;
number2 = 45;

if (number1 > number2) {
  if (number1 % 2 == 0) {
    document.write(`<p>Broj ${number1} je veci i paran je</p>`);
  } else document.write(`<p>Broj ${number1} je veci i nije paran</p>`);
} else if (number2 % 2 == 0) {
  document.write(`<p>Broj ${number2} je veci i paran je</p>`);
} else document.write(`<p>Broj ${number2} je veci i nije paran</p>`);

// ZADATAK 20
// Uneti dva datuma i ispisati onaj koji je raniji. Datume unosimo tako što u posebnim promenljivama navedemo dan, mesec i godinu, za svaki od njih.

d1 = 6;
m1 = 7;
y1 = 1990;

d2 = 7;
m2 = 7;
y2 = 1990;

if (y1 < y2) {
  document.write(`<p>${d1}.${m1}.${y1}.</p>`);
} else if (y2 < y1) {
  document.write(`<p>${d2}.${m2}.${y2}.</p>`);
} else {
  // obuhvata one slucajeve kada su godine iste
  if (m1 < m2) {
    document.write(`<p>${d1}.${m1}.${y1}.</p>`);
  } else if (m2 < m1) {
    document.write(`<p>${d2}.${m2}.${y2}.</p>`);
  } else {
    // obuhvata one slucajeve kada su i meseci isti
    if (d1 < d2) {
      document.write(`<p>${d1}.${m1}.${y1}.</p>`);
    } else if (d2 < d1) {
      document.write(`<p>${d2}.${m2}.${y2}.</p>`);
    } else {
      document.write(`<p>Datumi su isti</p>`);
    }
  }
}
