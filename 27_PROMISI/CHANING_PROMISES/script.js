let getResponse = (resource) => {
  // 1. Kreiranje XML objekta
  let request = new XMLHttpRequest();

  // 2. Otvaranje kreiranog zahteva
  request.open("GET", resource);

  // 3. Slanje zahteva
  request.send();

  let obj = new Promise((resolve, reject) => {
    // moze i direktno return New Promise
    request.addEventListener("readystatechange", () => {
      if (request.readyState == 4 && request.status == 200) {
        // Sve OK i koristimo resolve kome prosledjujemo podatke iz JSON fajla
        resolve(request.responseText);
      } else if (request.readyState == 4) {
        // Nesto nije OK
        reject("Nije moguce dohvatiti podatke"); // Nesto nije ok i koristimo reject kome saljemo tekst greske
      }
    });
  });
  return obj;
};

////////////////////////////////////////////////////////
// =============== CHAINING PROMISES =============== //
//////////////////////////////////////////////////////

getResponse("../JSON/prvi.json")
  .then((sadrzaj) => {
    console.log("prvi.json resolved", sadrzaj);
    return getResponse("../JSON/drugi.json"); // Vraca promise na koji se odnosi naredni then
  })
  .then((sadrzajDrugog) => {
    console.log("drugi .json resloved", sadrzajDrugog);
    return getResponse("../JSON/treci.json");
  })
  .then((sadrzajTreceg) => {
    console.log("treci .json resloved", sadrzajTreceg);
  })
  .catch((greska) => {
    console.log("Promise reject", greska); // Catch je jedan <3
  });

console.log("KRAJ");

////////////////////////////////////////////////////////
// =============== CHAINING PROMISES =============== //
//////////////////////////////////////////////////////
