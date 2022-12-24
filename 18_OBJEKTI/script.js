console.log(`objekti`);

let blog1 = {
  title: "HTML",
  content: "Ovo je blog o osnovnim HTML tagovima",
  author: "Jelena",
};

// Ispis celog objekta
console.log(blog1);
console.log(typeof blog1);

// Ispis jednog propertija
console.log(blog1.title);
console.log(blog1[`title`]);

// Izmena propertija
blog1.content = "Osnove HTML-a";
console.log(blog1);
blog1["author"] = "Stefan";
console.log(blog1);

///////////////////////////////////////

let user = {
  username: "JM",
  age: 28,
  blogs: ["IF naredba grananja", "FOR petlja", "WHILE petlja"],
  login: function () {
    console.log(`Ulogovani ste`);
  },
  logout: function () {
    console.log(`Izlogovani ste`);
  },
  logBlogs: function () {
    this.blogs.forEach((b) => {
      console.log(b);
    });
  },
};

user.login();
user.logout();
user.logBlogs();

console.log(this);
//unutar dokumenta
user.blogs.forEach((b) => {
  document.write(`<p>${b}</p>`);
});

/////////////////////////////////////////

// Formirati objekat dan koji sadrži:
// Datum (string u formatu YYYY/MM/DD),
// Kiša (true/false),
// Sunce (true/false),
// Oblačno (true/false),
// Vrednosti temperature (Niz temperatura tog dana).

let dan = {
  // OSOBINE
  datum: "2021/12/23",
  kisa: false,
  sunce: false,
  oblacno: true,
  temperature: [5, 10, -1, 15, 15, -9],
  // FUNKCIONALNOSTI
  // 1. Određuje i vraća prosečnu temperaturu izmerenu tog dana.
  prosecna: function () {
    let suma = 0;
    this.temperature.forEach((t) => {
      suma += t;
    });
    return suma / this.temperature.length;
  },
  // 2. Prebrojava i vraća koliko merenja je bilo sa natprosečnom temperaturom.
  brNatprosecnih: function () {
    let br = 0;
    let avg = this.prosecna();
    this.temperature.forEach((t) => {
      if (t > avg) {
        br++;
      }
    });
    return br;
  },
  //3. Prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom.
  maksimalna: function () {
    let max = this.temperature[0];
    this.temperature.forEach((t) => {
      if (t > max) {
        max = t;
      }
    });
    return max;
  },
  brojMaksimalnih: function () {
    let max = this.maksimalna();
    let br = 0;
    this.temperature.forEach((t) => {
      if (t == max) {
        br++;
      }
    });
    return br;
  },
  // 4. Prima dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti).
  medjuTemperatura: function (a, b) {
    let br = 0;
    this.temperature.forEach((el) => {
      if (el > a && el < b) {
        br++;
      }
    });
    return br;
  },
  // 5. Vraća true ukoliko je u većini dana temperatura bila iznad proseka. U suprotnom vraća false.
  iznadProseka: function () {
    let vrednost = undefined;
    let natProsecna = this.brNatprosecnih();
    this.temperature.forEach((el) => {
      if (natProsecna > this.temperature.length / 2) {
        //moze direktno this.brNatp...
        vrednost = true;
      } else {
        vrednost = false;
      }
    });
    return vrednost;
    // return this.brNatprosecnih() > this.temperature.length / 2;
  },
  // 6. Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false.
  // prvi nacin
  ledenDan1: function () {
    for (let i = 0; i < this.temperature.length; i++) {
      if (this.temperature[i] > 0) {
        return false;
      }
    }
    return true;
  },
  // drugi nacin
  ledenDan2: function () {
    let br = 0;
    vrednost = undefined;
    this.temperature.forEach((el) => {
      if (el > 0) {
        br++;
      }
    });
    if (br > 0) {
      vrednost = false;
    } else {
      vrednost = true;
    }
    return vrednost;
  },
  //treci nacin

  ledenDan3: function () {
    let leden_dan = true;
    this.temperature.forEach((temp) => {
      if (temp > 0) {
        leden_dan = false; // nema else zato se ne konvertuje u true
      }
    });
    return leden_dan;
  },
};
console.log(dan.prosecna());
console.log(dan.brNatprosecnih());
console.log(dan.brojMaksimalnih());
console.log(dan.medjuTemperatura(8, 13));
console.log(dan.iznadProseka());
console.log(dan.ledenDan1());
console.log(dan.ledenDan2());
console.log(dan.ledenDan3());
