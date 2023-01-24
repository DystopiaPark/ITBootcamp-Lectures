console.log(db); // db - objekat "baze podataka"

let users = db.collection("users");
console.log(users);

let user1 = users.doc("mmiletic");

console.log(user1);

let user2 = db.doc("users/fstojanovic");
console.log(user2);

/*
Kada "pikiramo" dokument preko ovih komandi,
mozemo da izvrsimo jednu od osnovne 4 operacije:
 CRUD (Create, Read, Update, Delete)
 Create: doc.set(...)
 Read  : doc.get(...)
 Update: doc.update(...)
 Delete: doc.delete(...)               ===============
Sve cetiri metode kao rezultat vracaju ====PROMISE====
======================================================
=> Mozemo da lancamo .then() i .catch() na bilo koju od ove 4 metode
*/

// Dodajemo dokument u customers kolekciju
// ako ostavimo .doc() prazno, sam generise
db.collection("customers")
  .doc("cust001")
  .set({
    name: "Laza Lazic",
    age: 35,
    addresses: ["Cacak", "Loznica"],
    salary: 400,
  })
  .then(() => {
    console.log("Uspesno dodata musterija");
  })
  .catch((err) => {
    // automatski hvata gresku
    console.log("Greska:" + err);
  });

db.collection("customers")
  .doc("cust001")
  .set(
    {
      height: 185,
    },
    {
      merge: true,
    }
  )
  .then(() => {
    console.log("Uspesno dodata musterija");
  })
  .catch((err) => {
    // automatski hvata gresku
    console.log("Greska:" + err);
  });

console.log(1);
console.log(2);

// Add a new document in collection "tasks"

let datum1 = new Date("2023-03-15 19:00:00");
let datum2 = new Date("2023-03-15 21:00:00");

db.collection("tasks")
  .doc("fudbal")
  .set(
    {
      title: "Fudbal",
      start_date: firebase.firestore.Timestamp.fromDate(datum1),
      due_date: firebase.firestore.Timestamp.fromDate(datum2),
      priority: false,
      description: "Fudbalica sa drustvom",
    },
    { merge: true }
  )
  .then(function () {
    console.log("Task successfully added!");
  })
  .catch(function (error) {
    console.error("Error adding task: ", error); //The error() method writes an error message to the console
  });

// Add a new document in collection "customers"

db.collection("customers")
  .doc("cust002")
  .set({
    addresses: ["Leskovac", "Nis"],
    age: 33,
    height: 179,
    name: "Milutin Milankovic",
    salary: 400,
  })
  .then(function () {
    console.log("Task successfully added!");
  })
  .catch(function (error) {
    console.error("Error adding task: ", error);
  });

// Add a new document in collection "users"

db.collection("users")
  .doc("bpetronijevic")
  .set(
    {
      age: 90,
      name: "Branislav",
      surname: "Petronijevic",
      height: 155,
    },
    {
      merge: true,
    }
  )
  .then(function () {
    console.log("Task successfully added!");
  })
  .catch(function (error) {
    console.error("Error adding task: ", error);
  });

// Update metoda

db.collection("users")
  .doc("vristic")
  .update({
    godine: 22,
    adrese: ["Nis", "Beograd"], // stvara novi update
  })
  .then(() => {
    console.log("Korisnik uspesno promenjen");
    return db
      .collection("users")
      .doc("vristic")
      .update({
        adrese: firebase.firestore.FieldValue.arrayUnion("Cacak"), // update
      });
  })
  .then(() => {
    console.log("Korisnik uspesno promenjen");
  })
  .catch((err) => {
    console.log(err);
  });
