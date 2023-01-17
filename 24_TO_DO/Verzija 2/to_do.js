let allLi = document.querySelectorAll("li");
let allLiArray = Array.prototype.slice.call(allLi);
let input = document.getElementById("input");
let btn = document.getElementById("btn");
let lista = document.getElementById("lista");
let pocetak = document.getElementById("pocetak");
let kraj = document.getElementById("kraj");

input.addEventListener("keydown", (e) => {
  if (input.value != "") {
    if (e.key === "Enter") {
      let li = document.createElement("li");
      if (pocetak.checked == true) {
        lista.prepend(li);
        li.textContent = input.value;
        allLiArray.push(li);
        input.value = "";
      } else {
        lista.appendChild(li);
        li.textContent = input.value;
        allLiArray.push(li);
        input.value = "";
      }
    }
  }
});

// for (let i = 0; i < allLiArray.length; i++) {
//   allLiArray[i].addEventListener("click", () => {
//     allLi[i].classList.toggle("cross-li");
//   });
// }

lista.addEventListener("click", (e) => {
  // console.log("Kliknuto na ul");
  // console.log(e);
  // console.log(e.target);
  // console.log(e.target.tagName);
  if (e.target.tagName == "LI") {
    // console.log("Kliknuto na LI");
    e.target.remove();
  }
});

//================================================================
// LOCAL STORAGE
//================================================================
// Smestanje u lokalnu memoriju

localStorage.setItem("username", "Jelena");
localStorage.setItem("city", "Nis");

// Update u lokalnoj memoriji
localStorage.setItem("username", "Stefan");
// Ukoliko key postoji vec u local storage onda vrsi update za taj key
// Ukoliko key ne postoji u local storage, onda vrsi dodavanje (novi unos) u local storage

console.log(localStorage.getItem("city"));
console.log(localStorage.getItem("username"));
let u = localStorage.getItem("username");
console.log(u);

localStorage.setItem("year", 28);
let god = localStorage.getItem("year");
god++;
localStorage.setItem("year", god);
console.log(`Imam ${god} godina`);
