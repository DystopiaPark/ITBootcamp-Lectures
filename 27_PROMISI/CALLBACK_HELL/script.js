console.log("CALLBACK");

let getResponse = (resource, cb) => {
  // 1. Kreiranje XML objekta
  let request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState == 4 && request.status == 200) {
      // Sve OK
      cb(request.responseText, undefined);
    } else if (request.readyState == 4) {
      // Nesto nije OK
      cb(undefined, "Nije moguce dohvatiti podatke");
    }
  });

  // 2. Otvaranje kreiranog zahteva
  request.open("GET", resource);

  // 3. Slanje zahteva
  request.send();
};

//////////////////////////////////////////////////////////
// ================= CALLBACK HELL =================== //
////////////////////////////////////////////////////////

getResponse("../JSON/prvi.json", (data, err) => {
  if (data) {
    // Ukoliko je sve OK sa prvi.json fajlom, ispisi njegove podatke i potom ucitaj drugi.json file
    console.log(data);
    getResponse("../JSON/drugi.json", (data, err) => {
      if (data) {
        // Ukoliko je sve OK sa prvi.json fajlom, ispisi njegove podatke i potom ucitaj treci.json file
        console.log(data);
        getResponse("../JSON/treci.json", (data, err) => {
          if (data) {
            console.log(data);
          } else {
            console.log(err);
          }
        });
      } else {
        console.log(err);
      }
    });
  } else {
    console.log(err); // Ispisuje gresku
  }
});
console.log("KRAJ");
