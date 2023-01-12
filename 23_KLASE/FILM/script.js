import { Film } from "./film.js";

let f1 = new Film("Odiseja u svemiru 2001", "Kjubrik", 1968);
let f2 = new Film("Zerkalo", "Tarkovski", 1978);
let f3 = new Film("", "", 5);
console.log(f1, f2, f3);

f1.godinaIzdanja = 1750;
console.log(f1);

console.log(f1.godinaIzdanja);

f1.stampaj();
f2.stampaj();
f3.stampaj();

f1.naslov = "";
f1.stampaj();
console.log(f1);
