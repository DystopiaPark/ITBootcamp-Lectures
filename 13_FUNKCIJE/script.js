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
  if (n % 2 == 0) {
    console.log("Netacno");
  } else {
    console.log("Tacno");
  }
}
neparan(3);

// ZADATAK 4
// Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

function maks2(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    console.log("Brojevi su jednaki");
  }
}

maks2(3, 5);

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
  for (i; i <= 18; i++) {
    document.write(
      `<p style="font-size:${i}px;">Jedan, dva, tri, pet, osam, trinaest</p>`
    );
  }
}
funkcija2(14);
