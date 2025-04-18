// // Task 1

// function tekshirishParol(parol) {
//   let sabablar = [];

//   if (parol.length < 8) {
//     sabablar.push("8 belgidan kam");
//   }

//   if (!/[A-Z]/.test(parol)) {
//     sabablar.push("Katta harf yo'q");
//   }

//   if (!/[a-z]/.test(parol)) {
//     sabablar.push("Kichik harf yo'q");
//   }

//   if (!/[0-9]/.test(parol)) {
//     sabablar.push("Raqam yo'q");
//   }

//   if (sabablar.length === 0) {
//     console.log("Kuchli parol");
//   } else {
//       console.log("Kuchsiz parol: " + sabablar.join(", "));
//   }

// }

// tekshirishParol("Sal0mDuny0");
// tekshirishParol("salom123");
// tekshirishParol("SalDun");

// Task 2

// function hisoblashXaridni(narxInput, miqdorInput) {
//   const narx = Number(narxInput);
//   const miqdor = Number(miqdorInput);

//   if (isNaN(narx) || isNaN(miqdor)) {
//     console.log("Noto'g'ri ma'umot");
//     return;
//   }

//   let umumiySumma = narx * miqdor;
//   let yakuniySumma = umumiySumma;

//   if (umumiySumma > 100000) {
//     yakuniySumma = Math.floor(umumiySumma * 0.9);
//   }

//   console.log(yakuniySumma);
// }

// hisoblashXaridni("50000", "3");
// hisoblashXaridni("60000", "2");
// hisoblashXaridni("abc", "5");

// Task 3

// function raqamAlmashtirish(matn) {
//   const natija = matn.replace(/[0-9]/g, "*");
//   console.log(natija);
// }

// raqamAlmashtirish("Salom123Dunyo");
// raqamAlmashtirish("HelloWorld");
// raqamAlmashtirish("2023-yil");

// Task 4

// function qisqartirish(matn) {
//   const sozlar = matn.trim().split(" ");

//   if (sozlar.length !== 2) {
//     console.log("Noto'g'ri format: Ism va familiya kiritishingiz kerak");
//     return;
//   }

//   const ism = sozlar[0];
//   const familiya = sozlar[1];
//   const qisqartma = ism.charAt(0).toUpperCase() + ". " + familiya;

//   console.log(qisqartma);
// }

// qisqartirish("Ahmad Rahimov");
// qisqartirish("Zilola Sobirova");
// qisqartirish("Jasur");

// Task 5

// function vaqtniAjratish(daqiqalarInput) {
//   const daqiqa = Number(daqiqalarInput);

//   if (isNaN(daqiqalarInput) || daqiqa < 0) {
//       console.log("Noto‘g‘ri ma‘lumot: Daqiqa manfiy bo‘lmasligi kerak");
//       return;
//   }

//   const soat = Math.floor(daqiqa / 60);
//   const qolganDaqiqa = daqiqa % 60;

//   console.log(`${soat} soat ${qolganDaqiqa} daqiqa`);
// }

// vaqtniAjratish("135");
// vaqtniAjratish("45");
// vaqtniAjratish("-10");
// vaqtniAjratish("abc");

// Task 6

// function harfHisoblash(matn, harf) {
//   if(harf.length !== 1) {
//     console.log("Xato: Faqat bitta harf kiritish kerak");
//     return;
//   }

//   const matnLower = matn.toLowerCase();
//   const harfLower = harf.toLowerCase();

//   let sanash = 0;

//   for (let i = 0; i < matnLower.length; i++) {
//     if (matnLower[i] === harfLower) {
//       sanash++;
//     }
//   }

//   console.log(sanash);
// }

// harfHisoblash("Salom Dunyo", "o");
// harfHisoblash("Hello world", "L");
// harfHisoblash("Test", "x");
// harfHisoblash("JavaScript", "ja");

// Task 7

// function konvertatsiyaQilish(somInput) {
//   const kurs = 12500;
//   const som = Number(somInput);

//   if (isNaN(som) || som < 0) {
//     console.log("Noto'g'ri ma'lumot");
//     return;
//   }

//   const dollar = (som / kurs).toFixed(2);
//   console.log(`${dollar} USD`);
// }

// konvertatsiyaQilish("125000");
// konvertatsiyaQilish("50000");
// konvertatsiyaQilish("abc");
