// let request = new XMLHttpRequest();
// request.addEventListener("readystatechange", () => {
//   console.log(request.readyState); // sa anonimnom moze this. umesto request
//   if (request.readyState === 4) {
//     console.log(request.responseText);
//   }
// });

let request = new XMLHttpRequest();
request.addEventListener("readystatechange", () => {
  if (request.readyState === 4 && request.status === 200) {
    let data = JSON.parse(request.responseText); // data = neki js objekat
    console.log(data);
  } else if (request.readyState === 4) {
    console.log("desila se greska");
  }
});
request.open("GET", "https://jsonplaceholder.typicode.com/posts");
request.send();

// XMLHttpRequest.readyState
// 0 UNSENT  Client has been created. open() not called yet.
// 1 OPENED  open() has been called.
// 2 HEADERS_RECEIVED send() has been called, and headers and status are avialable.
// 3 LOADING Downloading; responseText holds partial data.
// 4 DONE    the operation is complete.

// 1
// Uspostaviti konekciju ka endpointu za users resurs: https://jsonplaceholder.typicode.com/users

// 2 Ispisati u konzoli one korisnike čiji website ima domen „.com“.
let request2 = new XMLHttpRequest();

request2.addEventListener("readystatechange", () => {
  if (request2.readyState === 4 && request2.status === 200) {
    let data = JSON.parse(request2.responseText);
    data.forEach((el) => {
      if (el.website.includes(".com")) {
        console.log(el);
      }
    });
  } else if (request2.readyState === 4) {
    console.log("desila se greska");
  }
});

request2.open("GET", "https://jsonplaceholder.typicode.com/users");
request2.send();

// 3 Ispisati korisnike čije ime sadrži reč „Clementin“.
let request3 = new XMLHttpRequest();

request3.addEventListener("readystatechange", () => {
  if (request3.readyState === 4 && request3.status === 200) {
    let data = JSON.parse(request3.responseText);
    data.forEach((el) => {
      if (el.name.includes("Clementin")) {
        console.log(el);
      }
    });
  } else if (request3.readyState === 4) {
    console.log("desila se greska");
  }
});

request3.open("GET", "https://jsonplaceholder.typicode.com/users");
request3.send();

// 4 Ispisati korisnike koji rade u kompaniji čije ime sadrži reč „Group“, ili reč „LLC“.
let request4 = new XMLHttpRequest();

request4.addEventListener("readystatechange", () => {
  if (request4.readyState === 4 && request4.status === 200) {
    let data = JSON.parse(request4.responseText);
    data.forEach((el) => {
      if (
        el.company.name.includes("Group") ||
        el.company.name.includes("LLC")
      ) {
        console.log(el);
      }
    });
  } else if (request4.readyState === 4) {
    console.log("desila se greska");
  }
});

request4.open("GET", "https://jsonplaceholder.typicode.com/users");
request4.send();

// 5 Ispisati sve različite gradove u kojima rade ovi korisnici.
let request5 = new XMLHttpRequest();

request5.addEventListener("readystatechange", () => {
  if (request5.readyState === 4 && request5.status === 200) {
    let data = JSON.parse(request5.responseText);
    let nizGradova = [];
    data.forEach((el) => {
      if (!nizGradova.includes(el.address.city)) {
        nizGradova.push(el.address.city);
      }
    });
    console.log(nizGradova);
  } else if (request5.readyState === 4) {
    console.log("desila se greska");
  }
});

request5.open("GET", "https://jsonplaceholder.typicode.com/users");
request5.send();

// 6 Ispisati broj korisnika koji žive na adresi čije su obe vrednosti geografske dužine i geografske širine negativni brojevi.
let zbir = 0;
let request6 = new XMLHttpRequest();

request6.addEventListener("readystatechange", () => {
  if (request6.readyState === 4 && request6.status === 200) {
    let data = JSON.parse(request6.responseText);
    data.forEach((el) => {
      if (el.address.geo.lat < 0 && el.address.geo.lng < 0) {
        // includes("-")
        zbir++;
      }
    });
    console.log(
      `6. Ima ${zbir} korisnika koji zive na adresi sa negativnim geografskim dimenzijama`
    );
  } else if (request6.readyState === 4) {
    console.log("desila se greska");
  }
});

request6.open("GET", "https://jsonplaceholder.typicode.com/users");
request6.send();

// Zadaci sa slajda broj 16

let getUsers = (resolve, reject) => {
  let request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      let data = JSON.parse(request.responseText); // data = neki js objekat
      resolve(data);
    } else if (request.readyState === 4) {
      reject("Desila se greska");
    }
  });
  request.open("GET", "https://jsonplaceholder.typicode.com/users");
  request.send();
};

let ispisKonzola = (poruka) => {
  console.log(poruka);
};

// Zadatak 2
let websiteCom = (niz) => {
  niz.forEach((user) => {
    if (user.website.includes(".com")) {
      console.log(user.website);
    }
  });
};
getUsers(websiteCom, ispisKonzola);

// Zadatak 3
let imeClementin = (niz) => {
  niz.forEach((user) => {
    if (user.name.includes("Clementin")) {
      console.log(user.name);
    }
  });
};
getUsers(imeClementin, ispisKonzola);

// Zadatak 4

getUsers(
  (niz) => {
    niz.forEach((user) => {
      if (
        user.company.name.includes("Group") ||
        user.company.name.includes("LLC")
      ) {
        console.log(user.company.name);
      }
    });
  },
  (poruka) => {
    document.body.innerHTML += poruka; // >>???<<
  }
);
