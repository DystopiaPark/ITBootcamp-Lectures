console.log(`Nizovi objekata`);

let blog1 = {
  title: "HTML",
  likes: 30,
  dislikes: 5,
};
let blog2 = {
  title: "CSS",
  likes: 20,
  dislikes: 15,
};
let blog3 = {
  title: "Java Script!",
  likes: 70,
  dislikes: 77,
};

let blogs = [blog1, blog2, blog3];

// Ispis niza objekata
console.log(blogs);

// Ispis jednog objekta iz niza
console.log(blogs[2]); //treci blog

// Ispis propertija
console.log(blogs[2].title); // blogs[2]["title"]

// Ispis svih naslova blogova u konzoli
blogs.forEach((blog) => {
  console.log(blog.title);
});

// Ispis svih naslova blogova na stranici
for (let i = 0; i < blogs.length; i++) {
  document.body.innerHTML += `<h3>${blogs[i].title}</h3>`;
  document.body.innerHTML += `<p>likes: ${blogs[i].likes}</p>`;
  document.body.innerHTML += `<p>dislikes: ${blogs[i].dislikes}</p>`;
}

// ZADATAK 1
// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća ukupan broj lajkova

let sumLikes = (arrObjs) => {
  let sum = 0;
  arrObjs.forEach((obj) => {
    sum += obj.likes;
  });
  return sum;
};

console.log(sumLikes(blogs));

// ZADATAK 2
// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća prosečan broj lajkova

let avgLikes = (arrObjs) => {
  let sum = sumLikes(blogs);
  return sum / arrObjs.length;
};

console.log(avgLikes(blogs));

// ZADATAK 3
// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena

let moreLikes = (arrObjs) => {
  arrObjs.forEach((obj) => {
    if (obj.likes > obj.dislikes) {
      document.body.innerHTML += `<p>${obj.title}</p>`;
    }
  });
};

moreLikes(blogs);

// ZADATAK 4
// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena

let twoTimesMoreLikes = (arrObjs) => {
  arrObjs.forEach((obj) => {
    if (obj.likes >= 2 * obj.dislikes) {
      document.body.innerHTML += `<p>${obj.title}</p>`;
    }
  });
};

twoTimesMoreLikes(blogs);

// ZADATAK 5
// Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom

let exclamation = (arrObjs) => {
  arrObjs.forEach((obj) => {
    if (obj.title.charAt(obj.title.length - 1) == "!") {
      // moze i endsWith("!")
      // zato sto pocinje charAt na 0 mora -1 unutar metoda
      document.body.innerHTML += `<p>${obj.title}</p>`;
    }
  });
};

exclamation(blogs);
