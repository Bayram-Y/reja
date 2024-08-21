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

const { type } = require("express/lib/response");

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

function countDigits(x) {
  let count = 0;
  const mix = x.split("");
  console.log(mix);
  mix.forEach((index) => {
    if (Number.parseInt(index) || Number.parseInt(index) === 0) {
      count++;
    }
  });
  console.log(count);
}

countDigits("ad2a54y79wet0sfgb9");

function countDigits(mix) {
  let count = 0;
  for (let i = 0; i <= mix.length; i++) {
    if (Number.parseInt(mix[i]) || Number.parseInt(mix[i]) === 0) {
      count++;
    }
  }
  console.log(count);
}

countDigits("ad2a54y79wet0sfgb9");
