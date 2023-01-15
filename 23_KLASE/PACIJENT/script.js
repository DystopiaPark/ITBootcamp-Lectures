import { Pacijent } from "./pacijent.js";

let p1 = new Pacijent("Milica", 1.65, 45);
let p2 = new Pacijent("Goran", 2.02, 105);
let p3 = new Pacijent("Milan", 1.69, 70);
let p4 = new Pacijent("Ana", 1.73, 70);

p1.Stampaj();
console.log(p1, p2, p3);

console.log(p2.Kritican());

console.log(p1.visina);

let pacijenti = [p1, p2, p3, p4];

// NAJMANJA TEZINA

// forEach
let minPac = pacijenti[0];
pacijenti.forEach((p) => {
  if (p.tezina < minPac.tezina) {
    minPac = p;
  }
});
minPac.Stampaj();

// funkcija
let minTez = (niz) => {
  let min = niz[0].tezina;
  let minP = niz[0];
  niz.forEach((p) => {
    if (p.tezina < min) {
      min = p.tezina;
      minP = p;
    }
  });
  return minP;
};

console.log(minTez(pacijenti));

// ispis button
let btnMinTezina = document.getElementById("racunajMinTezinu");
btnMinTezina.addEventListener("click", () => {
  let minPac = pacijenti[0];
  pacijenti.forEach((p) => {
    if (p.tezina < minPac.tezina) {
      minPac = p;
    }
  });
  minPac.Stampaj();
  let pMinTezina = document.getElementById("minTezina");
  pMinTezina.innerHTML = minPac.StampajListu();
});

// NAJVECI BMI

// funkcija
let najveciBMI = (niz) => {
  let maxBmi = niz[0].Bmi();
  let maxP = niz[0];
  niz.forEach((p) => {
    if (p.Bmi() > maxBmi) {
      maxBmi = p.Bmi();
      maxP = p;
    }
  });
  return maxP;
};

console.log(najveciBMI(pacijenti));

let bmiBtn = document.getElementById("bmi-btn");

bmiBtn.addEventListener("click", () => {
  let maxBmi = document.getElementById("max-bmi");
  console.log(najveciBMI(pacijenti));
  maxBmi.innerHTML = najveciBMI(pacijenti).StampajListu();
});

// Pacijenti cije ime sadrzi slovo A

let aPac = document.getElementById("a-pac");
let aBtn = document.getElementById("a-btn");

aBtn.addEventListener("click", () => {
  aPac.textContent = "";
  pacijenti.forEach((p) => {
    if (p.ime.includes("a") || p.ime.includes("A")) {
      aPac.innerHTML += p.StampajListu();
    }
  });
});

//  Napraviti funkciju srednjaVisina kojoj se prosleđuje niz
// pacijanata a koja određuje i vraća srednju visinu
// pacijenata.

let srednjaVisina = (niz) => {
  let sumaVisina = 0;
  let brPac = niz.length;
  niz.forEach((p) => {
    sumaVisina += p.visina;
  });
  return sumaVisina / brPac;
};
console.log(srednjaVisina(pacijenti));

let divAvgVisina = document.querySelector("#avgVisina");

divAvgVisina.innerHTML = `Prosecna visina svih pacijenata je: ${srednjaVisina(
  pacijenti
)}`;
