db.collection("tasks")
  .where("priority", "==", true)
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

let datum = new Date();
let godina = datum.getFullYear();
let datum1 = new Date(godina, 0, 1); // 1. januar tekuce godine
let datum2 = new Date(godina + 1, 0, 1); // 1. januar sledece godine
let ts1 = firebase.firestore.Timestamp.fromDate(datum1);
let ts2 = firebase.firestore.Timestamp.fromDate(datum2);

db.collection("tasks")
  .where("due_date", ">=", ts1)
  .where("due_date", "<", ts2)
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
