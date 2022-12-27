// ZADATAK 1
// Svim parnim paragrafima na stranici dodati klasu error, a svim neparnim paragrafima dodati klasu success

let paragrafi = document.getElementsByTagName("p");
console.log(paragrafi);
for (i = 0; i < paragrafi.length; i++) {
  if (i % 2 == 0) {
    paragrafi[i].classList.add("error");
  } else {
    paragrafi[i].classList.add("success");
  }
}

// ZADATAK 2
// Tekst u paragrafima naizmenično pisati veličinom 15px, veličinom 20px i veličinom od 25px.

for (i = 0; i < paragrafi.length; i++) {
  if (i % 3 == 0) {
    paragrafi[i].style.fontSize = "15px";
  } else if (i % 3 == 1) {
    paragrafi[i].style.fontSize = "20px";
  } else {
    paragrafi[i].style.fontSize = "25px";
  }
}

// ZADATAK 3
// Svim paragrafima čiji tekst sadrži reč error, postaviti klasu na error, svim paragrafima čiji tekst sadrži reč success, postaviti klasu na success. Ostale klase paragrafa ne modifikovati.
//  if(p.textContent.includes(’success’))

for (i = 0; i < paragrafi.length; i++) {
  if (paragrafi[i].textContent.includes("error")) {
    paragrafi[i].classList.add("error");
  } else if (paragrafi[i].textContent.includes("success")) {
    paragrafi[i].classList.add("success");
  }
}
// ZADATAK 4
// Svim paragrafima koji imaju klasu error skloniti tu klasu, a svim paragrafima koji nemaju klasu error dodati tu klasu.

for (i = 0; i < paragrafi.length; i++) {
  paragrafi[i].classList.toggle(`error`);
}
