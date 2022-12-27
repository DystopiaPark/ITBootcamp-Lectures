// POJEDINACNI BLOGOVI
let blog1 = {
  title: `HTML`,
  likes: 120,
  dislikes: 30,
};

let blog2 = {
  title: `JS`,
  likes: 41,
  dislikes: 20,
};

let blog3 = {
  title: `Java`,
  likes: 330,
  dislikes: 20,
};

let blog4 = {
  title: `Python`,
  likes: 33,
  dislikes: 66,
};

let blog5 = {
  title: `CSS`,
  likes: 78,
  dislikes: 26,
};

let blog6 = {
  title: `Node.js`,
  likes: 5,
  dislikes: 88,
};

// NIZ BLOGOVA
let blogs = [blog1, blog2, blog3, blog4, blog5, blog6];

// USERS

let user1 = {
  username: `Filip`,
  age: 32,
  blogs: [blog1, blog2],
  logBlogs: function () {
    this.blogs.forEach((el) => {
      console.log(el);
    });
  },
};

let user2 = {
  username: `Misko`,
  age: 16,
  blogs: [blog3, blog4, blog5],
  logBlogs: function () {
    this.blogs.forEach((el) => {
      console.log(el);
    });
  },
};

let user3 = {
  username: `Paki`,
  age: 28,
  blogs: [blog6],
  logBlogs: function () {
    this.blogs.forEach((el) => {
      console.log(el);
    });
  },
};

// NIZ USERA

let users = [user1, user2, user3];

// ZADATAK 1
// Ispisati sve blogove korisnika user1

user1.logBlogs();

// ZADATAK 2
// Ispisati prvi blog korisnika user

console.log(user1.blogs[0]);

// ZADATAK 3
// Ispisati naslov prvog bloga koji je napisao korisnik user1

console.log(user1.blogs[0].title);

// ZADATAK 4
// Ispisati imena onih autora koji imaju ispod 18 godina

users.forEach((el) => {
  if (el.age < 18) {
    console.log(el.username);
  }
});

// ZADATAK 5
// Ispisati naslove onih blogova koji imaju više od 50 lajkova

blogs.forEach((el) => {
  if (el.likes > 50) {
    console.log(el.title);
  }
});

// ZADATAK 6
// Ispisati sve blogove autora čiji je username ’Filip’

users.forEach((el) => {
  if (el.username == "Filip") {
    el.logBlogs();
  }
});

// ZADATAK 7
// Ispisati imena onih autora koji imaju ukupno više od 100
// lajkova za blogove koje su napisali

console.log(user1.blogs);

users.forEach((el) => {
  let acc = 0;
  el.blogs.forEach((el2) => {
    acc += el2.likes;
  });
  if (acc > 100) {
    console.log(el.username);
  }
});

// ZADATAK 8
// Ispisati naslove onih blogova koji imaju natprosečan broj
// pozitivnih ocena

let prosecanBroj = (niz) => {
  let suma = 0;
  let prosecanBroj = 0;
  blogs.forEach((el) => {
    suma += el.likes - el.dislikes;
  });
  prosecanBroj = suma / niz.length;
  return prosecanBroj;
};

console.log(prosecanBroj(blogs));

let natprosecanBrojPozitivnih = (niz) => {
  let prosecanBr = prosecanBroj(blogs);
  blogs.forEach((el) => {
    if (el.likes - el.dislikes > prosecanBr) {
      console.log(el.title);
    }
  });
};

natprosecanBrojPozitivnih(blogs);

// ZADATAK 9
// Ispisati naslove onih blogova koji imaju natprosečan broj
// pozitivnih ocena i ispodprosečan broj negativnih ocena
