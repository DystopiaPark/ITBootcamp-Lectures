let allLi = document.querySelectorAll("li");

for (let i = 0; i < allLi.length; i++) {
  allLi[i].addEventListener("click", () => {
    allLi[i].classList.toggle("cross-li");
  });
}
