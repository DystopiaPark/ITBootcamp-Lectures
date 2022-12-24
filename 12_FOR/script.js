// 1. Ispisati brojeve od 1 do 20
let w = 1;
while (w <= 20) {
  console.log(w);
  w++;
}

for (i = 1; i <= 20; i++) {
  console.log(i);
}

// 2. Ispisati brojeve od 20 do 1
for (i = 20; i > 0; i--) {
  console.log(i);
}

// 3. Ispisati parne brojeve od 1 do 20

// prvi nacin
for (i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// drugi nacin
for (i = 2; i <= 20; i += 2) {
  console.log(i);
}

// treci nacin

// 4. Ispisati dvostruku vrednost brojeva od 5 do 15
///////////////////////////////////////////////////////////////////////////
// 5. Odrediti sumu brojeva od 1 do n
let s = 0;
let n = 5;
for (i = 1; i <= n; i++) {
  s += i;
}
console.log(`Suma je ${s}`);

// 7. Odrediti proizvod brojeva od n do m

let p = 1;
n = 2;
let m = 5;
for (n; n <= m; n++) {
  p *= n;
}
console.log(p);

// 8. Odrediti sumu kvadrata brojeva od n do m *

s = 0;
n = 5;
m = 8;
for (n; n <= m; n++) {
  s += Math.pow(n, 2);
}
console.log(s);

// 9. Preuzeti proizoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3.
// For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora).

for (i = 1; i <= 3; i++) {
  document.write(`<img src="${i}.png" width= "200px" />`);
}

// Ispisati prvih n parnih brojeva pocevsi od broja 2
n = 3;
i = 2;
let brParnih = 0;
while (brParnih < n) {
  if (i % 2 == 0) {
    brParnih++;
    console.log(`${brParnih}. od ${n} parnih je broj ${i}`);
  }
  i++;
}
// sa for

n = 3;
i = 2;
brParnih = 0;
for (brParnih; brParnih < n; i++) {
  if (i % 2 == 0) {
    brParnih++;
    console.log(`${brParnih}. od ${n} parnih je broj ${i}`);
  }
  i++;
}

// Koliko brojeva ucestvuje u sumiranju dok suma ne predje broj k

k = 30;
let suma = 0;
let br_brojeva = 0; //Pitam se?
let ii = 1;

while (suma < k) {
  suma += ii;
  br_brojeva++;
  ii++;
}
console.log(br_brojeva);

// 10. Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100. *

p = 1;
n = 20;
m = 100;
for (n; n <= m; n++) {
  if (n % 11 == 0) {
    p *= n;
  }
}
console.log(p);

// 11. Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.

let kolicinaBrojeva = 0;
for (i = 5; i <= 150; i++) {
  if (i % 13 == 0) {
    kolicinaBrojeva++;
  }
}
console.log(kolicinaBrojeva);

// 12. Ispisati aritmetičku sredinu brojeva od n do m.

zbir = 0;
kolicinaBrojeva = 0;
n = 3;
m = 5;
for (n; n <= m; n++) {
  zbir += n;
  kolicinaBrojeva++;
}
console.log(zbir / kolicinaBrojeva);

//13. Prebrojati koliko brojeva od n do m je pozitivno, a koliko njih je negativno. *

n = -33;
m = 55;
let neg = 0;
let poz = 0;
for (n; n <= m; n++) {
  if (n >= 0) {
    poz++;
  } else {
    neg++;
  }
}
console.log(`Broj pozitivnih je ${poz}, a negativnih je ${neg}`);

//14. Prebrojati koliko je brojeva od 5 do 50 koji su deljivi sa 3 ili sa 5. *

n = 5;
m = 50;
kolicinaBrojeva = 0;
for (n; n <= m; n++) {
  if (n % 3 == 0 && n % 5 == 0) {
    kolicinaBrojeva++;
  }
}
console.log(`Ima ${kolicinaBrojeva}`);

//15. Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4.

n = 22;
m = 34;
suma = 0;
broj = 0;
for (n; n <= m; n++) {
  if (n % 10 == 4) {
    suma += n;
    broj++;
  }
}
console.log(suma, broj);

// 16. Odrediti sumu brojeva od n do m koji nisu deljivi brojem a

n = 22;
m = 34;
a = 7;
suma = 0;
for (n; n <= m; n++) {
  if (n % a != 0) {
    suma += n;
  }
}
console.log(suma);
// 17. Odrediti proizvod brojeva od n do m koji su deljivi brojem a *

n = 10;
m = 15;
a = 5;
proizvod = 1;
for (n; n <= 15; n++) {
  if (n % a == 0) {
    proizvod *= n;
  }
}
console.log(proizvod);

// 18. Odrediti sa koliko brojeva je deljiv uneti broj k

let ka = 333;
kolicinaBrojeva = 0;
for (i = 1; i <= ka; i++) {
  if (ka % i == 0) {
    kolicinaBrojeva++;
  }
}
console.log(kolicinaBrojeva);

// 19. Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.

// prvi nacin
n = 5;
a = 0;
for (i = 1; i <= n; i++) {
  if (n % i == 0) {
    a++;
  }
}

if (a > 2) {
  console.log("Broj nije prost");
} else {
  console.log("Broj je prost");
}

// 20. Napraviti tabelu sa 6 redova.
// Svaki red tabele treba da ima po dve ćelije (dve kolone).
// Svakom parnom redu dodati klasu „obojen“.
// Korišćenjem CSS-a, klasi obojen postaviti proizvoljnu boju pozadine.

let table = `<table border="1">`;
// Ispis redova
for (i = 1; i <= 6; i++) {
  if (i % 2 == 0) {
    table += `
    <tr class="pink">
      <td>Tekst</td>
      <td>Tekst</td>
    </tr>
  `;
  } else {
    table += `
    <tr>
      <td>Tekst</td>
      <td>Tekst</td>
    </tr>
  `;
  }
}

table += `</table>`;

// document.body.innerHTML += table;
document.write(table);

// 21. Koristeći for petlju kreirati neuređenu listu sa ugnježdenim elementima, kao što je prikazano na slici sa desne strane.

let list = `<ul>`;
for (i = 1; i <= 10; i++) {
  if (i % 3 != 0) {
    list += `
      <li>Element${i}</li>
    `;
  } else {
    list += `
    <ul>
      <li style="color:purple;">Element${i}</li>
    </ul>
    `;
  }
}
list += "</ul>";
document.body.innerHTML += list;

let lista = `<ul>`;
for (i = 1; i <= 10; i++) {
  if (i % 3 == 0) {
    lista += `
      <li>
        <ul>
          <li style="color:purple;">Element${i}</li>
        </ul>
      </li>
    `;
  } else {
    lista += `
      <li>Element${i}</li>
    `;
  }
}
lista += "</ul>";
document.body.innerHTML += lista;

// 22. Kreirati 64 span elemenata i rasporediti ih kao na slici desno, koristeći for petlju. *

for (i = 1; i <= 64; i++) {
  document.body.innerHTML += `<span>${i}</span>`;
  if (i % 8 == 0) {
    document.body.innerHTML += `<br>`;
  }
}

// 23. Kreirati 64 span elemenata i rasporediti ih kao na slici desno, tako da elementi izgledaju kao polja šahovske table.
// U realizaciji ovog zadatka koristiti for petlju. *
