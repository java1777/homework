// Task 1

let son1 = parseFloat(prompt("Birinchi sonni kiriting:"));
let son2 = parseFloat(prompt("Ikkinchi sonni kiriting:"));

let yigindi = son1 + son2;

alert("Ikki sonning yig'indisi: " + yigindi);



// Task 2

let ism = prompt("Ismingizni kiriting:");
let familiya = prompt("Familiyangizni kiriting:");

let toliqIsm = ism + " " + familiya;

alert(toliqIsm);

// Task 3

let yosh = parseInt(prompt("Yoshingizni kiriting:"));

if (yosh < 18) {
  alert("Siz voyaga yetmagansiz.");
} else {
  alert("Siz voyaga yetgansiz.");
}

// Task 4

let son = parseInt(prompt("Iltimos, biror son kiriting:"));

if (son % 2 === 0) {
  alert("Kiritilgan son juft.");
} else {
  alert("Kiritilgan son toq.");
}

//   Task 5

let ball = parseInt(prompt("Imtihon boxosini kiriting (0-100 oralig'ida):"));

if (ball >= 90 && ball <= 100) {
  alert("A");
} else if (ball >= 80 && ball <= 89) {
  alert("B");
} else if (ball >= 70 && ball <= 79) {
  alert("C");
} else if (ball >= 60 && ball <= 69) {
  alert("D");
} else if (ball >= 0 && ball < 60) {
  alert("F");
} else {
  alert("Noto'g'ri boxo kiritildi. Iltimos, 0 dan 100 gacha bo'lgan son kiriting.");
}

//   Task 6

let tomon = parseFloat(prompt("Kvadratning tomon uzunligini kiriting (sm):"));

let perimetr = 4 * tomon;
let yuza = tomon * tomon;

alert("Perimetri: " + perimetr + " sm, Yuz: " + yuza + " sm²");

//   Task 7

let tomon = parseFloat(prompt("Kubning tomon uzunligini kiriting (sm):"));

let hajm = tomon ** 3;

alert("Hajm: " + hajm + " sm³");

//   Task 8

let celsius = parseFloat(prompt("Haroratni Celsiusda kiriting (°C):"));

let fahrenheit = (celsius * 9/5) + 32;


alert(celsius + "°C = " + fahrenheit + "°F");

//   Task 9

let namlik = parseFloat(prompt("Havoning namlik foizini kiriting (%):"));

if (namlik < 30) {
  alert("Havo juda quruq.");
} else if (namlik > 30 && namlik < 60) {
  alert("Havo qulay.");
} else if (namlik === 30 || namlik === 60) {
  alert("Havo qulay.");
} else if (namlik > 60) {
  alert("Havo nam.");
} else {
  alert("Noto‘g‘ri qiymat kiritildi.");
}

//   Task 10

let tezlik = parseFloat(prompt("Internet tezligini kiriting (Mbps):"));

if (tezlik < 50) {
  alert("Internet sekin.");
} else if (tezlik >= 50 && tezlik < 100) {
  alert("Internet o'rtacha.");
} else if (tezlik >= 100) {
  alert("Internet juda tez.");
} else {
  alert("Noto'g'ri qiymat kiritildi.");
}

