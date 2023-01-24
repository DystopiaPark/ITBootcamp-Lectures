let form = document.getElementById("order");
let truckCap = document.getElementById("cap");
let result = document.getElementById("result");

function getItems(resourse, resolve, reject) {
  let request = new XMLHttpRequest();
  request.addEventListener("readystatechange", function () {
    if (request.readyState === 4 && request.status === 200) {
      let data = JSON.parse(request.responseText);
      resolve(data);
    } else if (request.readyState === 4) {
      reject("Greska");
    }
  });
  request.open("GET", resourse);
  request.send();
}
function submitForm1(e) {
  e.preventDefault();
  // 1. iz fajla stock.json dohvati sve artikle koji nisu na stanju
  let ids = [];
  getItems(
    "json/stock.json",
    (data) => {
      data.forEach((artikal) => {
        if (artikal.stock == 0) {
          ids.push(artikal.id);
        }
      });
      // 2. iz fajla weigths.json dohvati njihovu tezinu
      getItems(
        "./json/weights.json",
        (data) => {
          let totalWeight = 0;
          data.forEach((artikal) => {
            if (ids.includes(artikal.id)) {
              totalWeight += artikal.weight;
            }
          });
          if (totalWeight > truckCap.value) {
            result.innerHTML = "Kamion nema slobodni kapacitet";
          } else {
            // 3. ako tezina nije veca od kapaciteta kamiona iz fajla prices.json dohvati njihovu cenu
            getItems(
              "json/prices.json",
              (data) => {
                let totalPrice = 0;
                console.log(totalPrice);
                data.forEach((artikal) => {
                  if (ids.includes(artikal.id)) {
                    totalPrice += artikal.price;
                  }
                });
                result.innerHTML = `Ukupna cena proizvoda je ${totalPrice}`;
              },
              (message) => {
                result.innerHTML = message;
              }
            );
          }
        },
        (message) => {
          result.innerHTML = message;
        }
      );
    },
    (message) => {
      result.innerHTML = message;
    }
  );
}
// preko ovog callbach hell tacno ali ne prakticno.
// sledi preko promisa gde je isto tacno ali prakticno
// form.addEventListener("submit", submitForm1);
// 2. Iz fajla weights.json dohvati njihovu tezinu
// getItems("./json/weight.json", (data) => {}, (message) => {}); //ne moze ovako
// 3. Ako tezina nije verca od kapaciteta kamiona, iz fajla prices.json dohvati njihovu cenu
// getItems("./json/prices.json", (data) => {}, (message) => {}); //ne moze ovako
/*
PRVI PRISTUP: da se funkcije getItems() zovu jedna ispod druge
OVO NIJE DOBRO!!!!!!

DRUGI PRISTUP: Redosled asinhronih poziva se odvija preko callback funkcija
JESTE TACAN, ali je jako nepraktican (callback hell)

TRECI PRISTUP: Pozivi se lancaju preko promisa
TACAN I PRAKTICAN
*/

function getItemsReturnPromise(resourse) {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.addEventListener("readystatechange", function () {
      if (request.readyState === 4 && request.status === 200) {
        let data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("Greska");
      }
    });
    request.open("GET", resourse);
    request.send();
  });
}

function submitForm2(e) {
  e.preventDefault();
  let ids = [];
  getItemsReturnPromise("./json/stock.json")
    .then((data) => {
      data.forEach((artikal) => {
        if (artikal.stock == 0) {
          ids.push(artikal.id);
        }
      });
      return getItemsReturnPromise("./json/weights.json");
    })
    .then((data) => {
      let totalWeight = 0;
      data.forEach((artikal) => {
        if (ids.includes(artikal.id)) {
          totalWeight += artikal.weight;
        }
      });
      if (totalWeight > truckCap.value) {
        result.innerHTML = "Kamion nema slobodni kapacitet";
      } else {
        return getItemsReturnPromise("./json/prices.json");
      }
    })
    .then((data) => {
      if (data !== undefined) {
        let totalPrice = 0;
        console.log(totalPrice);
        data.forEach((artikal) => {
          if (ids.includes(artikal.id)) {
            totalPrice += artikal.price;
          }
        });
        result.innerHTML = `Ukupna cena proizvoda je ${totalPrice}`;
      }
    })
    .catch((message) => {
      result.innerHTML = message;
    });
}

// form.addEventListener("submit", submitForm2);
form.addEventListener("submit", submitForm2);

// 2

let form2 = document.getElementById("order2");
let minCena = document.getElementById("cena1");
let maxCena = document.getElementById("cena2");
let result2 = document.getElementById("result2");
let naziv = document.getElementById("naziv");

function getItemsReturnPromise2(resourse) {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.addEventListener("readystatechange", function () {
      if (request.readyState === 4 && request.status === 200) {
        let data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("Greska");
      }
    });
    request.open("GET", resourse);
    request.send();
  });
}

function submitForm3(e) {
  e.preventDefault();
  let stockIDs = [];
  getItemsReturnPromise("./json/stock.json")
    .then((data) => {
      data.forEach((el) => {
        if (el.stock > 0) {
          stockIDs.push(el.id);
        }
      });
      return getItemsReturnPromise("./json/prices.json");
    })
    .then((data) => {
      data.forEach((el) => {
        if (
          stockIDs.includes(el.id) &&
          el.item.includes(naziv.value) &&
          el.price >= minCena.value &&
          el.price <= maxCena.value
        ) {
          result2.innerHTML += `
          <li>
          ${el.item}
          </li>
          `;
        }
      });
    })
    .catch((message) => {
      result2.innerHTML = message;
    });
}
form2.addEventListener("submit", submitForm3);
