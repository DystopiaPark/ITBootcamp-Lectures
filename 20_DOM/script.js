console.log(document); // objekat (koren DOM stabla)
console.log(document.body); // objekat (body tag iz DOM stabla)

let el1 = document.getElementById("p2");
console.log(el1); // objekat iz DOM stabla

console.log("Stefan");

let el2 = document.getElementsByClassName("par");
console.log(el2); // HTML Collection objekata iz DOM stabla

let el3 = document.getElementsByTagName("p");
console.log(el3); // HTML Collection objekata iz DOM stabla

let el4 = document.getElementsByTagName("a");
console.log(el4); // HTML Collection objekata iz DOM stabla

let el5 = document.getElementsByName("p");
console.log(el5); // NodeList objekata iz DOM stabla

// pristup elementima HTML Collection
for (let i = 0; i < el2.length; i++) {
  console.log(el2[i]); // el2[i] je element iz HTML kolekcije el2
}

// Ovako ne moze - HTML Collection ne poseduje forEach petlju
// el2.forEach((el) => {
//   console.log(el); // postoji razlika izmedju HTML kolekcije i niza, ne moze sa forEach
// });

let elems = Array.from(el2);
elems.forEach((el) => {
  console.log(el);
});

// Pristup elementima NodeList - moze i preko for i preko forEach

el5.forEach((e) => {
  console.log(e);
});

// QUERY SELECTORI ================================================================

// Primena metoda querySelector

let t1 = document.querySelector("#p2"); // kao parametar ide css selector
console.log(t1);

let t2 = document.querySelector(".par");
console.log(t2); // objekat - PRVI objekat obuhvacen poslednjim CSS selektorom

// primena metoda querySelectorAll

let t3 = document.querySelectorAll(".par");
console.log(t3);

// =====================================================================================

t1.innerHTML = "Novi tekst paragrafa sa id-jem <b>p2</b>";
t1.innerHTML = "Novi tekst paragrafa sa id-jem <span class='bold'>p2</span>";

for (let i = 0; i < t3.length; i++) {
  t3[i].innerHTML = "Promena teksta u elementu sa klasom par";
}

let link = document.querySelector("a");
link.href = "https://www.google.com";
link.target = "_blank";
link.id = "link";

/*
link.style.color = "red";
link.style.border = "1px solid blue";
link.style.fontSize = "24px";
*/

// link.style = "color: red; border: 1px solid blue; font-size: 24px;"; // ne moze += jer link nije string vec objekat

link.setAttribute(
  "style",
  "color: red; border: 1px solid blue; font-size: 24px;"
);

// =====================================================================================
// CHILD NODES
let table = document.querySelector("table");
console.log(table);
console.log(table.parentNode); // body
console.log(table.childNodes[0]); // text  je Enter koji udaramo izmedju tagova
console.log(table.childNodes[1]); // tbody
console.log(table.childNodes[1].childNodes[0]); // tr tag

for (let i = 0; i < document.body.childNodes.length; i++) {
  let element = document.body.childNodes[i];
  console.log(element);
}

// ====================================================================================
// CLASS LIST

// DODAVANJE CHILDA
let naslov = document.createElement("h1");
naslov.innerHTML = "Naslov kreiran iz JS-a";
document.body.appendChild(naslov); // kao poslednji potomak
document.body.prepend(naslov); // kao prvi potomak
naslov.remove(); // brisi element

// TABELU KREIRATI PREKO APPEND CHILDA
