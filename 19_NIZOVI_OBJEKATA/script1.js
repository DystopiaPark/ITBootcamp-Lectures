// OBJEKAT U OBJEKTU

// BLOGOVI

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
  likes: 170,
  dislikes: 77,
};
let blog4 = {
  title: "Responsive web design",
  likes: 3,
  dislikes: 15,
};
let blog5 = {
  title: "NoSQL DB",
  likes: 20,
  dislikes: 15,
};
let blog6 = {
  title: "Event Listener",
  likes: 700,
  dislikes: 70,
};

// USERI

let user = {
  username: "Jelena",
  age: 28,
  blogs: [blog1, blog2, blog3],
  logBlogs: function () {
    this.blogs.forEach((blog) => {
      console.log(blog.title);
    });
  },
};

let user1 = {
  username: "Stefan",
  age: 13,
  blogs: [blog4, blog5],
  logBlogs: function () {
    this.blogs.forEach((blog) => {
      console.log(blog.title);
    });
  },
};

let user2 = {
  username: "JohnDoe",
  age: 6,
  blogs: [blog6],
  logBlogs: function () {
    this.blogs.forEach((blog) => {
      console.log(blog.title);
    });
  },
};

// Ispisati sve blogove korisnika user

console.log(user.blogs);

// Ispisati naslov prvog bloga koji je napisao korisnik user

console.log(user.blogs[0]); // Ovo je prvi blog korisnika user
console.log(user.blogs[0].title); // Ispisati naslov prvog bloga koji je napisao korisnik user

user.logBlogs();

let users = [user, user1, user2];

// ZADATAK 1
// Ispisati imena onih autora koji imaju ispod 18 godina

users.forEach((u) => {
  if (u.age < 18) {
    console.log(u.username);
  }
});

// ZADATAK 2 ================ UGNJEZDENA PETLJA ========================
// Ispisati naslove onih blogova koji imaju više od 50 lajkova

users.forEach((user) => {
  let blogs = user.blogs; // niz blogova tekuceg user-a
  blogs.forEach((blog) => {
    // UGNJEZDENA PETLJA
    if (blog.likes > 50) {
      console.log(blog.title);
    }
  });
});

// ZADATAK 3
// Ispisati sve blogove autora čiji je username ’JohnDoe’

users.forEach((user) => {
  if (user.username == `JohnDoe`) {
    user.logBlogs(); // logBlogs ima log u sebi, te ne mora dodatan console log
  }
});

// ZADATAK ?
// Napraviti arrow funkciju kojoj se prosledjuje username autora, a ona ispisuje sve njegove blogove

let printBlogs = (username) => {
  users.forEach((user) => {
    if (user.username == username) {
      user.logBlogs();
    }
  });
};

printBlogs("Stefan");

// ZADATAK 7
// Ispisati imena onih autora koji imaju ukupno više od 100
// lajkova za blogove koje su napisali

let viseOdSto = (niz) => {
  niz.forEach((el) => {
    let blogsNiz = el.blogs;
    let zbir = 0;
    blogsNiz.forEach((el2) => {
      zbir += el2.likes;
    });
    if (zbir > 100) {
      console.log(el.username);
    }
  });
};

viseOdSto(users);

// ZADATAK 8
// Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena

// 1 nacin
let prosecnoPozitivne = (niz) => {
  let zbir = 0;
  let brBrojeva = 0;
  niz.forEach((el) => {
    let blogsNiz = el.blogs;
    blogsNiz.forEach((el) => {
      zbir += el.likes;
      brBrojeva++;
    });
  });
  return zbir / brBrojeva;
};

console.log(prosecnoPozitivne(users));

let natprosecnoPozitivne = (niz) => {
  let prosekPozitivnih = prosecnoPozitivne(niz);
  niz.forEach((el) => {
    el.blogs.forEach((el2) => {
      if (el2.likes > prosekPozitivnih) {
        console.log(el2.title);
      }
    });
  });
};

natprosecnoPozitivne(users);

// 2 nacin sa for loopom

let avgLikes = (users) => {
  let sum = 0; // Ukupna suma lajkova
  let br = 0; // Ukupan broj blogova
  for (let i = 0; i < users.length; i++) {
    let user = users[i]; // Ovo daje objekat user) jedan element iz niza users
    let blogs = user.blogs; // Ovo daje niz blogova za "selektovanog" korisnika
    for (let j = 0; j < blogs.length; j++) {
      let blog = blogs[j]; // Ovo daje objekat blog (jedan element iz niza blog)
      sum += blog.likes; // Dodajemo lajkove na sumu
      br++; // Dodajemo jos jedan blog
    }
  }
  return sum / br; // Vraca prosek
};

let iznadProsekaLajkovi = (niz) => {
  let prosekLajkova = avgLikes(niz);
  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    let blogs = user.blogs;
    for (let j = 0; j < blogs.length; j++) {
      let blog = blogs[j];
      if (blog.likes > prosekLajkova) {
        console.log(blog.title);
      }
    }
  }
};

console.log(`Prosecan broj lajkova je ${avgLikes(users)}`);
iznadProsekaLajkovi(users); //UNDEFINED

// ZADATAK 9
// Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena i ispodprosečan broj negativnih ocena

// let prosecnoNegativne = (niz) => {
//   let zbir = 0;
//   let brBrojeva = 0;
//   niz.forEach((el) => {
//     el.blogs.forEach((el) => {
//       zbir += el.dislikes;
//       brBrojeva++;
//     });
//   });
//   return zbir / brBrojeva;
// };

// let prosekPozitivnih = prosecnoPozitivne(users);
// let prosekNegativnih = prosecnoNegativne(users);
// let goreDole = {};
// users.forEach((el, i) => {
//   {
//     console.log(el.blogs[i].title);
//   }
// });
