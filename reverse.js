// let test = 65;
// let myRegex = /<.*?>/g;
// let text = "<h1>Salut les gars, je test de nouveaux trucs</h1>";
// const convertNameToBinary = (name) => {
//   binaryName = [];
//   for (let i = 0; i < name.length; i++) {
//     binaryName.push(name.charCodeAt(i).toString(2));
//   }
//   return binaryName.join("");
// };

// console.log(convertNameToBinary("Mamadou"));
// console.log(String.fromCharCode(test));
// console.log(parseInt(10, 10).toString(2));
// let result = text.match(myRegex);

let n = 4;

// const testIsNumIsPremier = (num) => {
//   let premiers = [];
//   if (num <= 1) return num;
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return num;
//     }
//   }
//   for (let i = num; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//       premiers.push(i);
//     }
//   }
//   return premiers.join("");
// };
// const email = "mamadousy1254@gmail.fr";
// const testIsEmailICorrect = /(?=^[a-z]{1}\w*\@[a-z]{5,}\.[a-z]{2,4}$)/i;
// const phone = "221776081592";
// const testIsPhoneSnIsCorrect = /(?=\+?^\d{0,3}\s?\d\d\s?\d{3}\s?\d\d\s?\d{2}$)/;
// const num = "34572810";
// const numberWithCommas = /\d{2}\b*/g;

// console.log(num.match(numberWithCommas));
// console.log(
//   num.replace(numberWithCommas, (match, ...groups) => {
//     return groups.join(" ");
//   })
// );

// let A = "Hello World";
// let lineLength = A.length + 4;
// let line = "*".repeat(lineLength);

// let resultat = `${line}\n* ${A} *\n${line}`;
// let regTest = /(?=^\w{2,9}\@[a-zA-Z]{5,9}\.[a-zA-Z]{3,5}$)/;
// let chaine = "Mama@gmai.com";
// console.log(regTest.test(chaine));
// let col = "C";
// let row = "R";
// let coord = 3;
// type = "R";

// for (let i = 0; i < 5; i++) {
//   line = "";
//   for (let j = 0; j < 5; j++) {
//     if (type == col) {
//       if (j == coord) {
//         line += "#";
//       } else {
//         line += ".";
//       }
//     } else if (type == row) {
//       if (i == coord) {
//         line += "*";
//       }else{
//         line += ".";
//       }
//     }
//   }
//   console.log(line);
// }

let text = "alphabet";

let replaceText = text.split("");

// let i = 1;

// while (i < replaceText.length) {
//   if (
//     Number(replaceText[i].charCodeAt(0)) <
//     Number(replaceText[i - 1].charCodeAt(0))
//   ) {
//     replaceText.splice(i, 1);
//     i--;
//   } else {
//     i++;
//   }
// }

// for (let i = 1; i < replaceText.length; i++) {
//   console.log(i);
//   if (
//     Number(replaceText[i].charCodeAt(0)) <
//     Number(replaceText[i - 1].charCodeAt(0))
//   ) {
//     replaceText.splice(i, 1);
//     i--;
//   }
// }

// console.log(replaceText.join(""));

let largestTab = [
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
];

const allHighMoy = largestTab.map((item) => {
  return item.reduce((a, b) => (a > b ? a : b));
});

let moy = allHighMoy.reduce((acc, el) => acc + el, 0);

console.log((moy / allHighMoy.length).toFixed(2));
