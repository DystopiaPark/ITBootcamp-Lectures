// Dohvatiti prvi paragraf na stranici.
let prviParagraf = document.getElementById(`p1`);
console.log(prviParagraf);
// Dohvatiti prvi div tag sa klasom „error“.
let prviDivError = document.querySelector(`div.error`);
console.log(prviDivError);
// Dohvatiti poslednji red u tabeli.
let zadnjiRed = document.getElementById(`last-row`);
let zadnjiRed2 = document.querySelector(`tr:last-child`);
let sviRedovi = document.getElementsByTagName(`tr`);

console.log(zadnjiRed);
console.log(zadnjiRed2);
console.log(sviRedovi[sviRedovi.length - 1]);
// Dohvatiti sve linkove na stranici.
let sviLinkovi = document.getElementsByTagName(`a`);
console.log(sviLinkovi);
for (i = 0; i < sviLinkovi.length; i++) {
  console.log(sviLinkovi[i]);
}
// Dohvatiti sve slike na stranici.
let sveSlike = document.getElementsByTagName(`img`);
console.log(sveSlike);
// Sve elemente ispisati u konzoli.
let sviElementi = document.getElementsByTagName(`*`);
console.log(sviElementi);

// =======================================================================

// ZADATAK 1
// Selektovati sve paragrafae i u svakom od njih pridodati tekst "VAZNO!!!"

let paragrafi = document.getElementsByTagName("p");

console.log(paragrafi);
for (let i = 0; i < paragrafi.length; i++) {
  paragrafi[i].innerHTML += "VAZNO!!!";
}

// ZADATAK 2
// svim divovima na stranici sa klasom "error", dodati po jedan naslov najvece velicine sa tekstom "Greska!".

let sviDivError = document.querySelectorAll(`div.error`);

for (let i = 0; i < sviDivError.length; i++) {
  sviDivError[i].innerHTML += `<h1>"Greska!"</h1>`;
}

// ZADATAK 3
// Neka je n broj paragrafa u datom dokumentu. U svakom i=tom paragrafu dodati broj i™, za svako i = 1,2,..., n.

for (let i = 0; i < paragrafi.length; i++) {
  paragrafi[i].innerHTML += `${Math.pow(i + 1, 2)}`;
}

// ZADATAK 4
// Svim slikama dodati alternativni tekst

for (let i = 0; i < sveSlike.length; i++) {
  sveSlike[i].alt = "ovde bi trebala da stoji slika";
}

// ZADATAK 5
// svim paragrafima postaviti atribute style tako da budu obojeni ljubicastom bojom

for (let i = 0; i < paragrafi.length; i++) {
  paragrafi[i].style.color = "purple";
}

// ZADATAK 6
// Svim parnim paragrafima na stranici postaviti pozadinsku zelenu boju, a svim neparnim paragrafima postaviti pozadinsku crvenu boju

for (let i = 0; i < paragrafi.length; i++) {
  if (i % 2 == 0) {
    paragrafi[i].style.backgroundColor = "green";
  } else {
    paragrafi[i].style.backgroundColor = "red";
  }
}

// ZADATAK 7
// Svim linkovima na stranici postaviti padding na 5px, font size na 18px i text-decoration na none.
// Parnim linkovima staviti zelenu pozadinsku boju i ljubicastu boju teksta, a neparnim linkovima plavu pozadinsku boju i belu boju teksta.
for (let i = 0; i < sviLinkovi.length; i++) {
  if (i % 2 == 0) {
    sviLinkovi[i].style =
      "padding: 5px; text-decoration: none; font-size: 18px; background: green; color: purple;";
  } else {
    sviLinkovi[i].style =
      "padding: 5px; text-decoration: none; font-size: 18px; background: blue; color: white;";
  }
}

// ZADATAK 8
// Svim slikama na stranici koja su sa ekstenzijom .png, postaviti okvir na debljinu 2px i crvenu boju.
for (let i = 0; i < sveSlike.length; i++) {
  if (sveSlike[i].src.endsWith(`.png`)) {
    sveSlike[i].style.border = `2px solid red`;
  }
}

// ZADATAK 9
// Svakom linku na stranici promeniti target svojstvo na sledeći način: ako je bilo _blank, postaviti na _top, a ako je bila neka vrednost različita od _blank, ili uopšte nije bilo postavljeno, tada postaviti na _blank.

for (i = 0; i < sviLinkovi.length; i++) {
  if (sviLinkovi[i].target == "_blank") {
    sviLinkovi[i].target = "_top";
  } else {
    sviLinkovi[i].target = "_blank";
  }
}
