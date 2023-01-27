// prioritetni
// db.collection("tasks")
//   .where("priority", "==", true)
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

let datum = new Date();
let godina = datum.getFullYear();
let datum1 = new Date(godina, 0, 1); // 1. januar tekuce godine
let datum2 = new Date(godina + 1, 0, 1); // 1. januar sledece godine
// let datum2 = new Date(godina, 11, 31, 23, 59, 59, 999);
let ts1 = firebase.firestore.Timestamp.fromDate(datum1);
let ts2 = firebase.firestore.Timestamp.fromDate(datum2);

// treba da se izvrse u tekucoj godini
// db.collection("tasks")
//   .where("due_date", ">=", ts1)
//   .where("due_date", "<", ts2)
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

// su zavrseni

let datum3 = new Date(); // bez konverzije
let ts3 = firebase.firestore.Timestamp.fromDate(datum3); // sa konverzijom

db.collection("tasks")
  .where("due_date", "<", datum)
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

// tek treba da pocnu

db.collection("tasks")
  .where("start_date", ">", ts3)
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
