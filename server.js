// "use strict";

// const fs = require("fs");

// process.stdin.resume();
// process.stdin.setEncoding("utf-8");

// let inputString = "";
// let currentLine = 0;

// process.stdin.on("data", function (inputStdin) {
//   inputString += inputStdin;
// });

// process.stdin.on("end", function () {
//   inputString = inputString.split("\n");

//   main();
// });

// function readLine() {
//   return inputString[currentLine++];
// }

// /*
//  * Complete the 'reverseArray' function below.
//  *
//  * The function is expected to return an INTEGER_ARRAY.
//  * The function accepts INTEGER_ARRAY a as parameter.
//  */

// function reverseArray(a) {
//   // Write your code here
// }

// function main() {
//   const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//   const arrCount = parseInt(readLine().trim(), 10);

//   const arr = readLine()
//     .replace(/\s+$/g, "")
//     .split(" ")
//     .map((arrTemp) => parseInt(arrTemp, 10));

//   const res = reverseArray(arr);

//   ws.write(res.join(" ") + "\n");

//   ws.end();
// }

console.log("======================");

// Sum of an array

("use strict");

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'simpleArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

function simpleArraySum(ar) {
  // Write your code here
  let theSum = ar.reduce(function (a, b) {
    return a + b;
  }, 0);
  return theSum;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const arCount = parseInt(readLine().trim(), 10);

  const ar = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arTemp) => parseInt(arTemp, 10));

  const result = simpleArraySum(ar);

  ws.write(result + "\n");

  ws.end();
}

if (condition) {
} else {
}

for (let index = 0; index < array.length; index++) {
  const element = array[index];
}
