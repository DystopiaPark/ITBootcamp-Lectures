console.log("CALLBACK");

let getTodos = (resource, cb) => {
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

getTodos("../JSON/todos.json", (data, err) => {
  if (data) {
    console.log(data); // Ispisuje podatke s kojima moze dalje da se raspolaze
  } else {
    console.log(err); // Ispisuje gresku
  }
});
console.log("KRAJ");
