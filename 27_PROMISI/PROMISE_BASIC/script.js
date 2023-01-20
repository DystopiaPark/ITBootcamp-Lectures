let getSomething = () => {
  let obj = new Promise((resolve, reject) => {
    resolve("Nesto resolve"); // Ako je sve proslo ok, onda je resolve
    reject("Nesto reject"); // Ako nesto nije proslo ok onda je reject
  });
  return obj; // Vraca objekat promise
};

// then() i catch() postoje zato sto getSomething vraca Promise
// Kada vrati resolve poziva se then(), a kada se vrati reject onda catch()

// Ako je Promise vratio resolve, realizuje se .then() grana
// Ako je promise vratio reject, realizuje se .catch() grana
getSomething()
  .then((a) => {
    console.log(`Aktivirana je .then grana ${a}`);
  })
  .catch((a) => {
    console.log(`Aktivirana je .catch grana ${a}`);
  });
