// zadatak 1
let h = 2;
let m = 10;

const a = 60;
let prosloMinuta = h * a + m;

console.log("Proslo je " + prosloMinuta + " minuta od ponoci");

// zadatak 1 +
let doPonoci = 24 * 60 - prosloMinuta;
console.log(doPonoci);

// zadatak 2
let minuti = prosloMinuta % a;
let sati = Math.floor(prosloMinuta / a);

console.log("To je " + sati + ":" + minuti);

//zadatak 3

let ukupnaCenaRobe = 1399;
let novcanica = 2000;
let kusur = novcanica - ukupnaCenaRobe;
console.log(kusur);

//zadatak 4

let datum = new Date(); //datum je objekat koji sadrzi info o trenutnom datumu  i vremenu
// let mesec = datum.getMonth() + 1;
// console.log(datum.getFullYear() + "/" + mesec);
let hours = datum.getHours();
let minutes = datum.getMinutes();
console.log(hours + ":" + minutes);
let mop = hours * 60 + minutes;
console.log(mop);

// zadatak 5
let dan = datum.getDate();
let mesec = datum.getMonth() + 1;
let godina = datum.getFullYear();

console.log(dan, mesec, godina);
console.log(godina + "/" + mesec + "/" + dan);
console.log(dan + "." + mesec + "." + godina);
// document.getElementById
//   ("naslov1").innerHTML = "bla bla bla " + dan + "." + mesec + "." + godina;

// zadatak 6

// prva konverzija
let brojEvra = 30;
let kurs = 117;

let ukupnoDinara = brojEvra * kurs;
console.log("broj dinara je: " + ukupnoDinara);

// druga konverzija
let brojDinara = 3510;

let ukupnoEvra = brojDinara / kurs;
console.log("broj evra je: " + ukupnoEvra);

// zadatak 7

// prva konverzija
let qEuro = 100;
let euroDinarKurs = 117;
let dolarDinarKurs = 110;

let dinara = qEuro * euroDinarKurs;

let dolara = dinara / dolarDinarKurs;

console.log("Kolicina dolara je: " + dolara);

// druga konverzija
let qdolar = 100;

let dinara2 = qdolar * dolarDinarKurs;

let eura = dinara2 / euroDinarKurs;

console.log("Kolicina eura je: " + eura);

//zadatak 8

let c = 30;

let f = c * 1.8 + 32;
let k = c + 273.15;

console.log("temperatura u  farenhajtima je: " + f + " , a u kelvinima: " + k);

let f2 = 80;
let c2 = (f2 - 32) * 0.5556; // ili / 1.8;

console.log(" temperatura u celzijusima je: " + c2);

let k2 = 380;
let c3 = 380 - 273.15;
console.log("temperatura 2 u celzijusima je: " + c3);
