console.log("Events");

//1. Dohvatiti element na koji zelimo da postavimo osluskivac

let button = document.getElementById(`btn`);

button.addEventListener(`click`, () => {
  console.log(`hello!`);
});

let button2 = document.getElementById("hello2");

button2.addEventListener(`dblclick`, () => {
  console.log(`hello hello!`);
});

// ZADATAK 1
// Napraviti dugme klikom na koje se u konzoli ispisuje vrednost brojača br.
// Brojač na početku ima vrednost 1, a svaki put kada se klikne na dugme povećati vrednost brojača za 1.

let btnBrojac = document.getElementById("brojac");
let br = 1;
btnBrojac.addEventListener(`click`, () => {
  console.log(`Brojac je ${br++}`);
});

// ZADATAK 2
// Napraviti paragraf i vrednost prethodne funkcije ispisivati u paragrafu umesto u konzoli.

let paragraf = document.getElementById("paragraf");
let br2 = 1;
btnBrojac.addEventListener("click", () => {
  paragraf.innerHTML += br2++;
});

// ZADATAK 3
// Napraviti dugme + i dugme -.
// Kada se klikne na dugme +, na ekranu prikazati vrednost brojača povećanu za 1.
// Kada se klikne na dugme -, na ekranu prikazati vrednost brojača smanjenu za 1.
let span = document.getElementById(`span`);
let minusBtn = document.getElementById(`minus`);
let plusBtn = document.getElementById(`plus`);
// let br3 = 0;

// minusBtn.addEventListener(`click`, () => {
//   span.innerHTML = --br3;
// });
// plusBtn.addEventListener(`click`, () => {
//   span.innerHTML = ++br3;
// });

// ZADATAK 4
// Dopuniti prethodni zadatak uslovima, tako da se na ekranu prikazuju samo pozitivni brojevi. Ukoliko je vrednost manja od nule, na ekranu nastaviti prikazivanje broja 0.

// br4 = 0;
// minusBtn.addEventListener(`click`, () => {
//   if (br4 <= 0) {
//     br4 = 0;
//     span.innerHTML = br4;
//   } else {
//     span.innerHTML = --br4;
//   }
// });
// plusBtn.addEventListener(`click`, () => {
//   span.innerHTML = ++br4;
// });

// // ZADATAK 4 ++
// Brojevi između 0 i 10 zelenom bojom.
// Brojevi preko 10 crvenom bojom.

// br4 = 0;

// minusBtn.addEventListener('click', ( )=> {
//   if (br4 <= 10) {
//     if (br4<= 0){
//       br4 =0;
//       span.innerHTML = br4;
//       span.style.color = 'green';
//     } else {
//       span.innerHTML = --br4;
//       span.style.color = `green;`
//     }
//   }
// })

// plusBtn.addEventListener(`click`, () => {
//   span.innerHTML = ++br4;

// ZADATAK 5
// Napraviti input polje i dugme.
// U input polje treba da se unese ime neke osobe, a na
// ekranu u paragrafu da se ispiše Zdravo i ime osobe
// preuzeto iz input polja.

let imeInput = document.getElementById(`ime`);
let prikaziBtn = document.getElementById(`prikazi`);
let prikazSpan = document.getElementById("prikaz");
// let polInput = document.querySelectorAll("input[name='pol']"); // getElementByName

prikaziBtn.addEventListener(`click`, () => {
  let value = imeInput.value;
  prikazSpan.innerHTML = `Hello ${value}`; // ${imeInput.value}
  imeInput.value = ""; // NESTO CUDNO, PROVERI POSLE CASA VIDEO
});

prikaziBtn.addEventListener("dblclick", () => {
  //////////// Selektovanje samo jednog radio buttona koji je checkiran \\\\\\\\\\\\
  let checkedPol = document.querySelector("input[name='pol']:checked"); // Jedan radio button koji je cekiran || vraca HTML tag
  let valueCheckedPol = checkedPol.value; // Daje vrednost (value) iz HTML taga
  console.log(valueCheckedPol); //n
  console.log(checkedPol.value); //n
  console.log(checkedPol.name); //pol

  //////////// Selektovanje svih radiobuttons prema name atributu \\\\\\\\\\\\\\\\\

  let inputRadios = document.getElementsByName("pol");
  console.log(inputRadios); // lista radio buttona
  inputRadios.forEach((input) => {
    if (input.checked) {
      console.log(input); // konkretan tag radiobuttona koji je checked
      console.log(input.value); // value za cekirano polje
    }
    console.log(input); // vraca sve tagove koji imaju name pol

    ///////////// Isto postizemo i ukoliko koristimo querySelectorAll \\\\\\\\\\\\\\\\\\\
    let inputRadiosQuery = document.querySelectorAll(`input[name="pol"]`);
    inputRadiosQuery.forEach((input) => {
      if (input.checked) {
        console.log(input);
      }
    });
  });
});

// ZADATAK 7
// Napraviti sledeću formu i rezultat računanja ispisati
// u paragrafu ispod nje.
// 1
let kvadratInput = document.getElementById("kvadrat");
let kvadratBtn = document.getElementById("kvadratBtn");

kvadratBtn.addEventListener("click", () => {
  let value = kvadratInput.value;

  kvadratInput.value = Math.pow(value, 2);
});

//2
let prepoloviInput = document.getElementById("prepolovi");
let prepoloviBtn = document.getElementById("prepoloviBtn");

prepoloviBtn.addEventListener("click", () => {
  let value = prepoloviInput.value;
  prepoloviInput.value = value / 2;
});

//3
let povrsinaInput = document.getElementById("povrsinaKruga");
let povrsinaBtn = document.getElementById("povrsinaBtn");

povrsinaBtn.addEventListener("click", () => {
  let value = povrsinaInput.value;
  povrsinaInput.value = Math.pow(value, 2) * Math.PI;
  window.open();
});
