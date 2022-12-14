console.log("Poruka iz JS datoteke");
let y; //deklarisali smo promenljivu y
let x = 3; //deklarisali smo promenljivu i dodelili joj vrednost 3
console.log(x);
x = "Pera";
console.log(x);

y = -10; // Dodeljuje se pocetna vrednost promenljive y
console.log(y);
x = 8;
console.log(x - y); //18

var z = true;
console.log(z);

const pi = 3.141592;
console.log(pi);

const e = 2.71;

let age; //age = undefined;
console.log(age); //undefined
console.log(age + 3); // NaN - Not a number

let age2;
age2 = null;
console.log(age2); //null
console.log(age2 + 3); //3

let ime = "Stefan";
console.log(ime);

let ime2 = "Stefan";
console.log(ime2);

let ime3 = "Stefan's room";
console.log(ime3);

let ime4 = 'This was a "funny" joke';
console.log(ime4);

// let ime5 = "This was a \"funny\" joke";
// console.log(ime5);

x = 5;
x += 3; // x = x + 3;
console.log(x);

x = 6; //moze i sa realnim brojevima
x++;
console.log(x);

++x;
console.log(x);

x = 6;
console.log(x++); // 6 (Prvo se iskoristi stara vrednost prom. x, pa se onda uveca)
console.log(x); // 7
console.log(++x); // 8 (Prvo se uveca vrednost prom x, pa se onda koristi)

x = 6;
console.log(x--); //6
console.log(--x); //4

console.log(7 / 3); //2.333333335
console.log(7 % 3); //1
console.log(24 % 18); //6

console.log(52 % 13); //0
