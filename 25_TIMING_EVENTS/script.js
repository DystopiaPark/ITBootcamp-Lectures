console.log(1);
console.log(2);
window.setTimeout(() => {
  console.log("Poruka ispisana nakon nekog vremena");
}, 1000 * 3);
console.log(3);
console.log(4);

let i = 5;
setInterval(() => {
  console.log(i);
  i++;
}, 1000);

let tajmer = null;

let btn1 = document.querySelector("#click1");
let btn2 = document.querySelector("#click2");
let btn3 = document.querySelector("#click3");
let btn4 = document.querySelector("#click4");

let ispis = document.querySelector("#ispis");

btn1.addEventListener("click", function (e) {
  e.preventDefault();
  let datum = new Date();
  let h = datum.getHours();
  let m = datum.getMinutes();
  let s = datum.getSeconds();
  if (tajmer === null) {
    tajmer = setTimeout(function () {
      ispis.innerHTML = `${h}:${m}:${s}`;
      tajmer = null;
    }, 1000 * 2);
  }
});

btn2.addEventListener("click", function (e) {
  e.preventDefault();
  clearTimeout(tajmer);
  tajmer = null;
});

let vr = 0;
let clock = null;
btn3.addEventListener("click", () => {
  if (clock === null) {
    clock = setInterval(() => {
      // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
      // let datum = new Date();
      // let h = datum.getHours();
      // let m = datum.getMinutes();
      // let s = datum.getSeconds();
      // ispis.innerHTML = `${h}:${m}:${s}`;
      vr++;
      ispis.innerHTML = vr;
    }, 1000);
  }
});

btn4.addEventListener("click", () => {
  clearInterval(clock);
  clock = null;
  ispis.innerHTML = "";
});

// PRIMER 2

let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let input = document.getElementById("input");
let count = null;
let br = 0;

startBtn.addEventListener("click", () => {
  if (count === null) {
    count = setInterval(() => {
      br++;
      input.value = br;
    }, 1000);
  }
});

stopBtn.addEventListener("click", () => {
  clearInterval(count);
  count = null;
});
