console.log(`Nizovi objekata`);

let blog1 = {
  title: "HTML",
  likes: 30,
  dislikes: 5,
};
let blog2 = {
  title: "CSS",
  likes: 20,
  dislikes: 15,
};
let blog3 = {
  title: "Java Script!",
  likes: 70,
  dislikes: 77,
};

let blogs = [blog1, blog2, blog3];

// =======================================================================

// ZADATAK 1
// Napraviti arrow funkciju kojoj se prosleđuje niz
// objekata, a ona vraća ukupan broj lajkova

let likes = (niz) => {
  let zbir = 0;
  niz.forEach((el) => {
    zbir += el.likes;
  });
  return zbir;
};

console.log(likes(blogs));

// =======================================================================

// ZADATAK 2
// Napraviti arrow funkciju kojoj se prosleđuje niz
// objekata, a ona vraća prosečan broj lajkova

let avgLikes = (niz) => {
  let zbir = 0;
  niz.forEach((el) => {
    zbir += el.likes;
  });
  return zbir / niz.length;
};

console.log(avgLikes(blogs));

// =======================================================================

// ZADATAK 3
// Napraviti arrow funkciju kojoj se prosleđuje niz
// objekata, a ona ispisuje sve one naslove blogova koji
// imaju više pozitivnih nego negativnih ocena

let pozitivniBlogovi = (niz) => {
  niz.forEach((el) => {
    if (el.likes > el.dislikes) {
      console.log(el.title);
    }
  });
};

pozitivniBlogovi(blogs);

// =======================================================================

// ZADATAK 4
// Napraviti arrow funkciju kojoj se prosleđuje niz
// objekata, a ona ispisuje sve one naslove blogova koji
// imaju najmanje duplo više pozitivnih nego negativnih
// ocena

let duploPozitivni = (niz) => {
  niz.forEach((el) => {
    if (el.likes >= 2 * el.dislikes) {
      console.log(el.title);
    }
  });
};

duploPozitivni(blogs);

// =======================================================================

// ZADATAK 5
// Napisati arrow funkciju kojoj se prosleđuje niz objekata
// a ona ispisuje sve naslove koji se završavaju uzvičnikom

let exclamation = (niz) => {
  niz.forEach((el) => {
    if (el.title.charAt(el.title.length - 1) == "!") {
      console.log(el.title);
    }
  });
};

exclamation(blogs);
