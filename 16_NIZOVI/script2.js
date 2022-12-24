// =================================================================================
// ZADATAK 24
// Dati su nizovi
// a[0], a[1], ..., a[n - 1] i
// b[0], b[1], ..., b[n - 1].
// Formirati niz c[0], c[1], ..., c[2n-1] ciji su elementi
// a[0], b[0], a[1], b[1], ..., a[n - 1], b[n - 1].

// zad24a
let zad24a = (a, b) => {
  let n = a.length; // n = b.length
  let c = [];
  for (let i = 0; i < n; i++) {
    c.push(a[i], b[i]);
    // c.push(a[i]);
    // c.push(b[i]);
  } // c = [a[0], b[0], a[1], b[1], ..., a[n - 1], b[n - 1] ]
  return c;
};

// zad24b
let zad24b = (a, b) => {
  let n = a.length; // n = b.length
  let c = [];
  for (let i = 0; i < n; i++) {
    c[2 * i] = a[i];
    c[2 * i + 1] = b[i];
  } // c = [a[0], b[0], a[1], b[1], ..., a[n - 1], b[n - 1] ]
  //        0     1     2     3        2n - 2    2n - 1
  return c;
};

// =================================================================================
// ZADATAK 25
// Dati su nizovi
// a[0], a[1], ..., a[n - 1] i
// b[0], b[1], ..., b[n - 1].
// Formirati niz c[0], c[1], ..., c[n-1] ciji su elementi
// a[0] * b[0], a[1] * b[1], ..., a[n - 1] * b[n - 1].

let zad25 = (a, b) => {
  let n = a.length;
  let c = [];
  for (let i = 0; i < n; i++) {
    c[i] = a[i] * b[i];
  }
  return c;
};

// =================================================================================
// ZADATAK 26
// Na osnovu niza a[0], a[1], ..., a[2n - 1] formirati niz b[0], b[1], ... b[n - 1] po formuli:
// b [i] = a[i] + a[2n - 1 - i]
//         --------------------
//                   2

//  i = 0; b[0] = a[0] + a[2n - 1]) / 2  ----> sr. vr. prvog i poslednjeg el niza a

//  i = 1; b[1] = a[1] + a[2n - 1 - 1]) / 2  ----> sr. vr. drugog i pretposlednjeg el niza a

let zad26 = (a) => {
  let n = a.length;
  let b = [];
  for (let i = 0; i < n / 2; i++) {
    b[i] = (a[i] + a[n - 1 - i]) / 2;
  }
  return b;
};

let a = [1, 3, 5, 7];
let b = [2, 4, 6, 8];
// let c = zad24a(a, b);
// let c = zad24b(a, b);
// let c = zad25(a, b);
// let c = zad26(a);
let c = zad26(b);

console.log(c);
