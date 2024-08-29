//21-lesson=>  Nodejs event loop va Callback functionlarni o'rganamiz
/*

console.log("Jack Ma maslahatlari");
const list = [
  "yaxchi talaba boling", // 0-20, 0
  "togri boshliq tanlang va koproq xato qiling", // 20-30, 1
  "uzingizga ishlashni boshlang", //30-40, 2
  "siz kuchli bolgan narsalarni qiling", //40-50, 3
  "yoshlarga investitsiya qiling", // 50-60, 4
  "endi dam oling, foydasi yoq endi", //60, 5
];

function maslahatBering(a, callback) {
  if (typeof a !== "number") callback("insert a number", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a > 20 && a <= 30) callback(null, list[1]);
  else if (a > 30 && a <= 40) callback(null, list[2]);
  else if (a > 40 && a <= 50) callback(null, list[3]);
  else if (a > 50 && a <= 60) callback(null, list[4]);
  else {
    setTimeout(function () {
      callback(null, list[5]);
    }, 3000);
  }
}
console.log("passed here 0");
maslahatBering(65, (err, data) => {
  if (err) console.log("ERROR:", err);
  else {
    console.log("javob:", data);
  }
});

console.log("passed here 1");

*/

// Asynchronus functions

// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxchi talaba boling", // 0-20, 0
//   "togri boshliq tanlang va koproq xato qiling", // 20-30, 1
//   "uzingizga ishlashni boshlang", //30-40, 2
//   "siz kuchli bolgan narsalarni qiling", //40-50, 3
//   "yoshlarga investitsiya qiling", // 50-60, 4
//   "endi dam oling, foydasi yoq endi", //60, 5
// ];

//Callback functions , setInterval

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setInterval(function () {
//       callback(null, list[5]);
//     }, 3000);
//   }
// }
// console.log("passed here 0");
// maslahatBering(65, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// });

// console.log("passed here 1");

// ASYNC functions

// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 5000);
//     });
//   }
// }

// CAll via then,catch

// console.log("passed here 0");
// maslahatBering(25)
//   .then((data) => {
//     console.log("Javob:", data);
//   })
//   .catch((err) => {
//     console.log("Error:", err);
//   });

// console.log("passed here 1");

// CAll async / await

// async function run() {
//   let javob = await maslahatBering(25);
//   console.log(javob);
//   javob = await maslahatBering(70);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }

// run();

// MITTASK  // A-TASK

// function countLetter(letter, word) {
//   let count = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === letter) {
//       count++;
//     }
//   }

//   console.log(count);
// }

// countLetter("e", "engineer");

// MITTASK  // B-TASK
/* B-TASK: 

Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

@MITASK */

// function countDigits(x) {
//   let count = 0;
//   const mix = x.split("");
//   console.log(mix);
//   mix.forEach((index) => {
//     if (Number.parseInt(index) || Number.parseInt(index) === 0) {
//       count++;
//     }
//   });
//   console.log(count);
// }

// countDigits("ad2a54y79wet0sfgb9");

// function countDigits(mix) {
//   let count = 0;
//   for (let i = 0; i <= mix.length; i++) {
//     if (Number.parseInt(mix[i]) || Number.parseInt(mix[i]) === 0) {
//       count++;
//     }
//   }
//   console.log(count);
// }

// countDigits("ad2a54y79wet0sfgb9");

/*
MITASK-C 

Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!
*/

/*
const moment = require("moment");

class Shop {
  //state
  non;
  lagmon;
  cola;
  //constructor
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }
  //method
  qoldiq() {
    console.log(
      ` Hozir ${moment().format("LT")} da ${this.non} non , ${
        this.lagmon
      } lagmon va ${this.cola} cola mavjud !`
    );
  }

  sotish(narsa, soni) {
    if (narsa === "non" || narsa === "lagmon" || narsa === "cola") {
      console.log(
        `Hozir ${moment().format("LT")} da ${narsa} ${soni} ta sotildi!`
      );
      this[narsa] -= soni;
    }
  }

  qabul(tovar, son) {
    if (tovar === "non" || tovar === "lagmon" || tovar === "cola") {
      console.log(
        `Hozir ${moment().format("LT")} da ${tovar} ${son} ta sotildi!`
      );
      this[tovar] += son;
    }
  }
}

const shop = new Shop(4, 5, 2);

shop.qoldiq();
console.log("=========================================================");

shop.sotish("non", 3);
shop.qabul("cola", 4);
console.log("=========================================================");
shop.qoldiq();

*/

// D-TASK:

// function checkContent(word1, word2) {
//   const soz = word2.split("");
//   const soz2 = word1.split("");
//   const result = soz.every((ele) => {
//     return soz2.includes(ele);
//   });
//   const result2 = soz2.every((item) => {
//     return soz.includes(item);
//   });
//   if (result && result2) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// checkContent("mitgroup", "gmtiprou");

// E-TASK:

function getReverse(x) {
  const word = x.split("").reverse().join("");
  console.log(word);
}

getReverse("hello");
