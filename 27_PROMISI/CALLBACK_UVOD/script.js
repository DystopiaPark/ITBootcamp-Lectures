console.log("Primeri callback funkcija");

///////////////
// Primer 1 //
/////////////

let myFunc = (callback) => {
  callback();
};

myFunc(() => {
  console.log("Callback funkcija okinuta");
});

////////////////////////////////////////////////////////
// Primer 2 callback funkcija za sabiranje dva broja //
//////////////////////////////////////////////////////

let sum = (callback) => {
  callback(5, 7);
};

// 1 nacin //
// Kreirali smo posebnu funkciju koja nam sluzi kao realizacija i koju cemo prosledjivati kao parametar
function printSum(a, b) {
  console.log(a + b);
}

sum(printSum); // Poziv funkcije koja realizuje callback ide bez zagrada

// 2 nacin //

sum((a, b) => {
  console.log(a + b);
});

//////////////////////////////////////////////////////////
// Primer 3 callback funkcija i parametar za operaciju //
////////////////////////////////////////////////////////

// 1 nacin //
let racunaj = (str, cb) => {
  console.log(str);
  let rez = cb(10, 5);
  console.log(rez);
};

racunaj("oduzimanje", (x, y) => {
  return x - y;
});

racunaj("deljenje", (x, y) => {
  return x / y;
});

//////////////////////////////////////////////////////////
// Primer 4 ========================================== //
////////////////////////////////////////////////////////

let racunaj2 = (str, br1, br2, funkcija) => {
  console.log(str, funkcija(br1, br2));
};

racunaj2("Mnozenje", 4, 7, (x, y) => {
  return x * y;
});
