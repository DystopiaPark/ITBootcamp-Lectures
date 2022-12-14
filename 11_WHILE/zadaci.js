// ZADATAK 1
// Ispisati brojeve od 1 do 20:

// a Svaki u istom redu

i = 1;
let poruka = "";
while (i <= 20) {
  poruka = poruka + i + " "; // poruka += (i + " ");
  i++;
}
console.log(poruka);

// b Svaki u novom redu

i = 1;
while (i <= 20) {
  console.log(i);
  i++;
}

// ZADATAK 2
// Ispisati brojeve od 20 do 1.

// prvi nacin
i = 20;
while (i > 0) {
  console.log(i);
  i--;
}

// drugi nacin
i = 1;
while (i <= 20) {
  console.log(21 - i);
  i++;
}

// ZADATAK 3
// Ispisati parne brojeve od 1 do 20.

// prvi nacin
i = 1;
while (i <= 20) {
  if (i % 2 == 0) {
    console.log(i);
  }
  i++;
}

// drugi nacin
i = 2;
while (i <= 20) {
  console.log(i);
  i += 2;
}

// ZADATAK 4
// Kreirati n paragrafa sa proizvoljnim tekstom i naizmenično ih obojiti u tri različite boje

let n = 7;
i = 1;
while (i <= n) {
  if (i % 3 == 0) {
    document.body.innerHTML += "<p class='plava'>Neki tekst</p>"; // +=     !!!
  } else if (i % 3 == 1) {
    document.body.innerHTML += "<p class='zelena'>Neki tekst</p>";
  } else {
    document.body.innerHTML += "<p class='crvena'>Neki tekst</p>";
  }
  i++;
}

// let paragraph = "<p>aaaaaa</p>";
// let n = 5;
// let paragraphSelector = document.getElementsByTagName("p");

// i = 0;
// while (i <= n) {
//   document.write(paragraph);
//   if ((i + 1) % 3 == 0) {
//     paragraphSelector[i].style.color = "red";
//   } else if ((i + 1) % 2 == 0) {
//     paragraphSelector[i].style.color = "green";
//   } else {
//     paragraphSelector[i].style.color = "blue";
//   }
//   i++;
// }

// ZADATAK 5
// Kreirati n proizvoljnih slika i staviti im naizmenično dva različita okvira

n = 2;
i = 1;
while (i <= n) {
  if (i % 2 == 0) {
    document.body.innerHTML +=
      "<img src='a.jpg' width='140px' class='border1'/>";
  } else {
    document.body.innerHTML +=
      "<img src='a.jpg' width ='140px' class='border2'/>";
  }
  i++;
}

// ZADATAK 6
// Odrediti sumu brojeva od 1 do 100

let a = 0;
i = 1;

while (i <= 100) {
  a += i;
  i++;
}
console.log(`Suma brojeva jednaka je ${a}`);

// ZADATAK 7
// Odrediti sumu brojeva od 1 do n

i = 1;
n = 85;
a = 0;

while (i <= n) {
  a += i;
  i++;
}
console.log(`Suma brojeva jednaka je ${a}`);

// ZADATAK 8
// Odrediti sumu brojeva od n do m

n = 50;
m = 105;
a = 0;

while (n <= m) {
  a += n;
  n++;
}
console.log(`Suma brojeva jednaka je ${a}`);

// ZADATAK 9
// Odrediti proizvod brojeva od n do m

n = 3;
m = 6;
a = 1;

while (n <= m) {
  a = a * n;
  n++;
}
console.log(`Suma brojeva jednaka je ${a}`);

/*
#   |     a    |   n   |   m
------------------------------
0   |     1    |   3   |   6
1   |     3    |   4   |   6
2   |     12   |   5   |   6
3   |     60   |   6   |   6
4   |     360  |   7   |   6
*/

// ZADATAK 10
// Odrediti sumu kvadrata parnih i sumu kubova neparnih brojeva od n do m

n = 5;
m = 10;
a = 0;
let b = 0;

while (n <= m) {
  if (n % 2 == 0) {
    a += Math.pow(n, 2);
  } else {
    b += Math.pow(n, 3);
  }
  n++;
}
console.log(`Suma kvadrata jednaka je ${a}`);
console.log(`Suma kubova jednaka je ${b}`);

// ZADATAK 11
// Odrediti sa koliko brojeva je deljiv uneti broj k

i = 1;
let k = 13;
let brojBrojeva = 0;

while (i <= k) {
  if (k % i == 0) {
    brojBrojeva++;
  }
  i++;
}
console.log(`Broj ${k} je deljiv sa ${brojBrojeva} broja`);

// ZADATAK 12
// Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.

i = 1;
n = 187;
a = 0;
while (i <= n) {
  if (n % i == 0) {
    a++;
  }
  i++;
}

if (a > 2) {
  console.log(`Broj ${n} nije prost`);
} else {
  console.log(`Broj ${n} je prost`);
}

// drugi metod

// function prostBroj(n) {
//   i = 1;
//   n = 13;
//   a = 0;
//   while (i <= n) {
//     if (n % i == 0) {
//       a++;
//     }
//     i++;
//   }

//   if (a == 2) {
//     return n;
//   } else return "nije prost broj";
// }

// b = prostBroj(n);
// console.log(b);

// teci metod

// k = 5;
// i = 2;
// let prostBroj = true;
// while (i < k) {
//   if (k % i == 0) {
//     prostBroj = false;
//     break;
//   }
//   i++;
// }
//   if (prostBroj == false) {
//     console.log(`Broj ${k} je slozen broj`);
//   } else {
//     console.log(`Broj ${k} je prost broj`);
//   }
