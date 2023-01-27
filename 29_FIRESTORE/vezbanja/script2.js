/*
// delete
db.collection("customers")
  .doc("cust001")
  .delete()
  .then(() => {
    console.log("Dokument uspesno izbrisan");
  })
  .catch((e) => {
    console.log("Desila se greska: " + e);
  });

// Dodavanje dokumenta u kolekciju preko metode add()
db.collection("customers")
  .add({
    name: "Mika Mikic",
    age: 25,
    salary: 800,
    addresses: ["Beograd", "Novi Sad"],
  })
  .then(() => {
    console.log("Dokument uspesno dodat");
  })
  .catch((e) => {
    console.log("Desila se greska: " + e);
  });

// 1) Moze se dohvatiti jedan dokument
// 2) Moze se dohvatiti vise dokumenata

// 1)
db.collection("users")
  .doc("vristic")
  .get() // get metoda vraca promise
  .then((doc) => {
    if (doc.exists) {
      // proveravamo da li dokument postoji
      let data = doc.data(); // metoda koja uzima podatke
      console.log("Uspesno skinut dokument: " + doc.id);
      console.log(data);
    } else {
      console.log("Ne postoji dati dokument");
    }
  })
  .catch((e) => {
    console.log("Greska: " + e);
  });

// 2)

db.collection("customers")
  .get()
  .then((snapshot) => {
    // svi clanovi kolekcije "customers"
    // dokument iz trenutnog stanja
    snapshot.forEach((doc) => {
      console.log("Uspesno skinut dokument:" + doc.id);
      console.log(doc.data());
    });
  })
  .catch((e) => {
    console.log("Greska: " + e);
  });
*/
// GET metoda kod kolekcije:
// 1) Prikazivanje dokumenata u odredjenom redosledu (OrderBy)
// 2) Prikazivanje odredjenog broja dokumenata (limit)
// 3) Prikazivanje dokumenata koji zadovoljavaju odredjene kriterijume - filtriranje(where)

/*
// 1) OrderBy:
db.collection("customers")
  .orderBy("salary", "desc") // od infinite do -infinite
  .orderBy("name", "asc") // Od a do z
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log("Uspesno skinut dokument:" + doc.id);
      console.log(doc.data());
    });
  })
  .catch((e) => {
    console.log("Greska: " + e);
  });
*/

/*
// 2) Limit:
db.collection("customers")
  .orderBy("salary", "desc") // od infinite do -infinite
  .orderBy("name", "asc") // Od a do z
  .limit(2) // Ogranicava koliko ce dokumenata da se prikazu
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log("Uspesno skinut dokument:" + doc.id);
      console.log(doc.data());
    });
  })
  .catch((e) => {
    console.log("Greska: " + e);
  });
*/
/*
// 3) where:
db.collection("customers")
  // .where("salary", ">", 500) // polje//poredjenje//vrednost kojom se uporedjuje vrednost polja [ svi cija je plata veca od 500] moze && sa 2 where
  // .where("salary", "<=", 600)
  .where("name", ">", "M")
  .where("name", "<", "N")
  .orderBy("name")
  .orderBy("age")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log("Uspesno skinut dokument:" + doc.id);
      console.log(doc.data());
    });
  })
  .catch((e) => {
    console.log("Greska: " + e);
  });
*/

// VEZBANJE

// Iz kolekcije customers, pročitati sve klijente sortirane po imenu.

// db.collection("customers")
//   .orderBy("name")
//   .get()
//   .then((snapshot) => {
//     snapshot.forEach((doc) => {
//       console.log("Uspesno skinut dokument:" + doc.id);
//       console.log(doc.data());
//     });
//   })
//   .catch((e) => {
//     console.log("Greska: " + e);
//   });

//   Iz kolekcije customers, pročitati sve klijente koji:
// Imaju adresu u Nišu

// db.collection("customers")
//   .where("addresses", "array-contains", "Nis")
//   .get()
//   .then((snapshot) => {
//     snapshot.forEach((doc) => {
//       console.log("Uspesno skinut dokument:" + doc.id);
//       console.log(doc.data());
//     });
//   })
//   .catch((e) => {
//     console.log("Greska: " + e);
//   });

// Imaju platu veću ili jednaku od 500
// db.collection("customers")
//   .where("salary", ">=", 500)
//   .get()
//   .then((snapshot) => {
//     snapshot.forEach((doc) => {
//       console.log("Uspesno skinut dokument:" + doc.id);
//       console.log(doc.data());
//     });
//   })
//   .catch((e) => {
//     console.log("Greska: " + e);
//   });

// Imaju platu između 300 i 800
// db.collection("customers")
//   .where("salary", ">", 300)
//   .where("salary", "<", 800)
//   .get()
//   .then((snapshot) => {
//     snapshot.forEach((doc) => {
//       console.log("Uspesno skinut dokument:" + doc.id);
//       console.log(doc.data());
//     });
//   })
//   .catch((e) => {
//     console.log("Greska: " + e);
//   });

// Imaju platu manju od 900, i imaju 30 godina
db.collection("customers")
  .where("salary", "<", 900) // nece da mi radi kad su obe
  .where("age", "==", 30) // mora da se napravi index
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log("Uspesno skinut dokument:" + doc.id);
      console.log(doc.data());
    });
  })
  .catch((e) => {
    console.log("Greska: " + e);
  });

// Imaju adresu u Nišu ili Beogradu

// db.collection("customers")
//   .where("addresses", "array-contains-any", ["Beograd", "Nis"])
//   .get()
//   .then((snapshot) => {
//     snapshot.forEach((doc) => {
//       console.log("Uspesno skinut dokument:" + doc.id);
//       console.log(doc.data());
//     });
//   })
//   .catch((e) => {
//     console.log("Greska: " + e);
//   });

// Imaju 22, 25 ili 28 godina.
// let numbers = [22, 25, 28];

// db.collection("customers")
//   .where("age", "in", numbers)
//   .get()
//   .then((snapshot) => {
//     snapshot.forEach((doc) => {
//       console.log("Uspesno skinut dokument:" + doc.id);
//       console.log(doc.data());
//     });
//   })
//   .catch((e) => {
//     console.log("Greska: " + e);
//   });
