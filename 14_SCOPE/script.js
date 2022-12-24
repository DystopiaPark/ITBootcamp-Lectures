// let, var i const
let a = 5;
var b = 10; // b = 10    ======== >>> isto je

console.log(a, b);
a++;
b++;
console.log(a, b);

a = 5; //   ================ >>> ne moze dva puta da se definise varijabla sa let
var b = 10;
console.log(a, b);

////////////////////////////////////////

let x = 10;
var y = 20;

if (true) {
  let x = 15; //   ======================== >>> LOCAL SCOPE  with let
  var y = 25; //   ======================== >>> GLOBAL SCOPE with var
  console.log(x, y); // 15, 25
  if (true) {
    console.log(x, y); // 15, 25
    let x = 17;
    console.log(x, y); // 17, 25
  }
  console.log(x, y); // 15, 25
}

console.log(x, y);

//////////////
